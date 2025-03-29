using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Midjourney.Infrastructure.Models;
using Midjourney.Infrastructure.Data;
using Midjourney.Infrastructure.LoadBalancer;
using MongoDB.Driver;

namespace Midjourney.Infrastructure.Services
{
    /// <summary>
    /// 备用账号池服务
    /// </summary>
    public class BackupAccountPoolService
    {
        private readonly ILogger<BackupAccountPoolService> _logger;
        private readonly DiscordLoadBalancer _discordLoadBalancer;

        public BackupAccountPoolService(ILogger<BackupAccountPoolService> logger, 
            DiscordLoadBalancer discordLoadBalancer)
        {
            _logger = logger;
            _discordLoadBalancer = discordLoadBalancer;
        }

        /// <summary>
        /// 获取配置
        /// </summary>
        public BackupAccountPool GetConfig()
        {
            // 使用 MongoHelper 获取数据
            var collection = MongoHelper.GetCollection<BackupAccountPool>();
            var config = collection.Find(Builders<BackupAccountPool>.Filter.Empty).FirstOrDefault();
            if (config == null)
            {
                config = new BackupAccountPool();
                collection.InsertOne(config);
            }
            return config;
        }

        /// <summary>
        /// 保存配置
        /// </summary>
        public void SaveConfig(BackupAccountPool config)
        {
            config.UpdateTime = DateTime.Now;
            var collection = MongoHelper.GetCollection<BackupAccountPool>();
            var filter = Builders<BackupAccountPool>.Filter.Eq(x => x.Id, config.Id);
            collection.ReplaceOne(filter, config);
        }

        /// <summary>
        /// 检查并激活备用账号
        /// </summary>
        /// <returns>激活的账号数量</returns>
        public Task<int> CheckAndActivateBackupAccounts()
        {
            var config = GetConfig();
            if (!config.Enable || config.BackupAccountIds.Count == 0)
            {
                return Task.FromResult(0);
            }

            config.LastCheckTime = DateTime.Now;
            SaveConfig(config);

            // 获取当前可用账号数
            var aliveInstances = _discordLoadBalancer.GetAliveInstances().ToList();
            var availableAccountCount = aliveInstances.Count;

            // 获取当前队列任务总数
            var totalQueueTasks = aliveInstances.Sum(instance => instance.GetQueueTasks().Count);

            _logger.LogInformation($"备用账号池检查 - 当前可用账号数: {availableAccountCount}, 队列任务总数: {totalQueueTasks}");

            // 检查是否需要激活备用账号
            bool needActivate = false;
            string activateReason = string.Empty;

            if (availableAccountCount < config.MinAvailableAccounts)
            {
                needActivate = true;
                activateReason = $"可用账号数({availableAccountCount})低于阈值({config.MinAvailableAccounts})";
            }
            else if (totalQueueTasks > config.MaxQueueTasks)
            {
                needActivate = true;
                activateReason = $"队列任务总数({totalQueueTasks})高于阈值({config.MaxQueueTasks})";
            }

            if (!needActivate)
            {
                return Task.FromResult(0);
            }

            // 确定要激活的账号数量
            int accountsToActivate = Math.Min(
                config.MaxActivateAccountsPerTime,
                config.BackupAccountIds.Count
            );

            if (accountsToActivate <= 0)
            {
                return Task.FromResult(0);
            }

            _logger.LogInformation($"备用账号池激活 - 原因: {activateReason}, 将激活 {accountsToActivate} 个备用账号");

            // 激活备用账号
            int activatedCount = 0;
            for (int i = 0; i < accountsToActivate; i++)
            {
                if (config.BackupAccountIds.Count == 0)
                    break;

                string accountId = config.BackupAccountIds[0];
                config.BackupAccountIds.RemoveAt(0);

                try
                {
                    // 记录激活信息，实际激活将由API层处理
                    _logger.LogInformation($"备用账号池 - 标记账号待激活: {accountId}");
                    activatedCount++;
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, $"备用账号池 - 激活账号失败: {accountId}");
                }
            }

            // 更新配置
            if (activatedCount > 0)
            {
                config.LastActivateTime = DateTime.Now;
                config.TotalActivatedAccounts += activatedCount;
                SaveConfig(config);
            }

            return Task.FromResult(activatedCount);
        }

        /// <summary>
        /// 添加账号到备用池
        /// </summary>
        public bool AddToBackupPool(string accountId)
        {
            var config = GetConfig();
            
            if (config.BackupAccountIds.Contains(accountId))
            {
                return false;
            }
            
            config.BackupAccountIds.Add(accountId);
            SaveConfig(config);
            
            return true;
        }

        /// <summary>
        /// 从备用池移除账号
        /// </summary>
        public bool RemoveFromBackupPool(string accountId)
        {
            var config = GetConfig();
            
            if (!config.BackupAccountIds.Contains(accountId))
            {
                return false;
            }
            
            config.BackupAccountIds.Remove(accountId);
            SaveConfig(config);
            
            return true;
        }
    }
}