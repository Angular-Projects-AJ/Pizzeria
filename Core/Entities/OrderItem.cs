using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class OrderItem
    {
        public OrderItem()
        {
        }

        public int Id { get; set; }
        public string EmployeeName { get; set; }
        public string CustomerFirstName { get; set; }
        public string CustomerLastName { get; set; }
        public int CustomerPhoneNumber { get; set; }
        public string CustomerAddress { get; set; }
        public int CustomerAddressZipCode { get; set; }
        public int PromisedDeliveryTime { get; set; }

        public string pizzasSize { get; set; }
        public int InitialDeliveryTime { get; set; }
        public int FinalDeliveryTime { get; set; }
        public int ErrorInDeliveryTime { get; set; }
        public int Tip { get; set; }
        public int OrderTotalRevenue { get; set; }
        public BasketItem BasketItem { get; set; }
        public string OrderStatus { get; set; }

    }
}