using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IOrderRepository
    {
        Task<CustomerOrder> GetOrderAsync(string orderId);
        Task<CustomerOrder> UpdateOrderAsync(CustomerOrder order);
        Task<bool> DeleteOrderAsync(string orderId);
    }
}