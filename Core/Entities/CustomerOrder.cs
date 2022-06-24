using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class CustomerOrder
    {
        public CustomerOrder() {

        }

        public CustomerOrder(string id) {
            id = id;
        }

        public string Id { get; set; }
        public List<OrderItem> Items { get; set; } = new List<OrderItem>();
    }
}