using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class OrderController : BaseApiController
    {
        private readonly IOrderRepository _orderRepository;

        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerOrder>> GetOrderById(string id)
        {
            var order = await _orderRepository.GetOrderAsync(id);

            return Ok(order ?? new CustomerOrder(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerOrder>> UpdateOrder(CustomerOrder order)
        {
            var updateOrder = await _orderRepository.UpdateOrderAsync(order);

            return Ok(updateOrder);
        }

        [HttpDelete]
        public async Task DeleteOrderAsync(string id)
        {
            await _orderRepository.DeleteOrderAsync(id);
        }
    }
}