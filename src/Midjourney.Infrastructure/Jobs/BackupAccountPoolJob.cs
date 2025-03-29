using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Midjourney.Infrastructure.Services;

namespace Midjourney.Infrastructure.Jobs
{
    /// <summary>
    /// 备用账号池检查任务
    /// </summary>
    public class BackupAccountPoolJob : BackgroundService
    {
        private readonly ILogger<BackupAccountPoolJob> _logger;
        private readonly IServiceProvider _serviceProvider;
        private readonly TimeSpan _checkInterval = TimeSpan.FromMinutes(5); // 每5分钟检查一次

        public BackupAccountPoolJob(
            ILogger<BackupAccountPoolJob> logger,
            IServiceProvider serviceProvider)
        {
            _logger = logger;
            _serviceProvider = serviceProvider;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            _logger.LogInformation("备用账号池检查任务已启动");

            while (!stoppingToken.IsCancellationRequested)
            {
                try
                {
                    using (var scope = _serviceProvider.CreateScope())
                    {
                        var backupAccountPoolService = scope.ServiceProvider.GetRequiredService<BackupAccountPoolService>();
                        int activatedCount = await backupAccountPoolService.CheckAndActivateBackupAccounts();
                        
                        if (activatedCount > 0)
                        {
                            _logger.LogInformation($"备用账号池检查 - 已激活 {activatedCount} 个备用账号");
                        }
                    }
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "备用账号池检查任务异常");
                }

                await Task.Delay(_checkInterval, stoppingToken);
            }
        }
    }
} 