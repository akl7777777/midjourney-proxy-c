using System;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using Midjourney.Infrastructure.Data;

namespace Midjourney.Infrastructure.Models
{
    /// <summary>
    /// 备用账号池配置
    /// </summary>
    [BsonCollection("backup_account_pool")]
    [MongoDB.Bson.Serialization.Attributes.BsonIgnoreExtraElements]
    [Serializable]
    public class BackupAccountPool : DomainObject
    {
        /// <summary>
        /// 是否启用备用账号池
        /// </summary>
        public bool Enable { get; set; } = false;

        /// <summary>
        /// 备用账号ID列表
        /// </summary>
        public List<string> BackupAccountIds { get; set; } = new List<string>();

        /// <summary>
        /// 最小可用账号数，低于此数量将激活备用账号
        /// </summary>
        public int MinAvailableAccounts { get; set; } = 3;

        /// <summary>
        /// 最大队列任务数，高于此数量将激活备用账号
        /// </summary>
        public int MaxQueueTasks { get; set; } = 50;

        /// <summary>
        /// 每次最多激活的账号数量
        /// </summary>
        public int MaxActivateAccountsPerTime { get; set; } = 1;

        /// <summary>
        /// 上次检查时间
        /// </summary>
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime LastCheckTime { get; set; } = DateTime.MinValue;

        /// <summary>
        /// 上次激活时间
        /// </summary>
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime LastActivateTime { get; set; } = DateTime.MinValue;

        /// <summary>
        /// 已激活的账号总数
        /// </summary>
        public int TotalActivatedAccounts { get; set; } = 0;

        /// <summary>
        /// 创建时间
        /// </summary>
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime CreateTime { get; set; } = DateTime.Now;

        /// <summary>
        /// 更新时间
        /// </summary>
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime UpdateTime { get; set; } = DateTime.Now;
    }
} 