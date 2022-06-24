using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using StackExchange.Redis;

namespace Infrastructure.Data
{
    public class OrderRepository : IOrderRepository
    {
        private readonly IDatabase _database;

        public OrderRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }

        public async Task<bool> DeleteOrderAsync(string orderId)
        {
            return await _database.KeyDeleteAsync(orderId);
        }

        public async Task<CustomerOrder> GetOrderAsync(string orderId)
        {
            var data = await _database.StringGetAsync(orderId);

            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<CustomerOrder>(data);
        }

        public async Task<CustomerOrder> UpdateOrderAsync(CustomerOrder order)
        {
            var created = await _database.StringSetAsync(order.Id,
                JsonSerializer.Serialize(order), TimeSpan.FromDays(100));
            
            if(!created) return null;

            return await GetOrderAsync(order.Id);

        }
    }
}