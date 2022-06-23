namespace Core.Entities
{
    public class BasketItem
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }

        public int Quantity { get; set; }

        public string PictureUrl { get; set; }
        public string Type { get; set; }

        // public string PizzaSize { get; set; }

        // public decimal PromisedTime { get; set; }
        // // break it by the zip code?
        // public string DeliveryAddress { get; set; }
        // public decimal Distance { get; set; }
        // // set rate/mile

        // public decimal Cost { get; set; }
        // public decimal PreWageEarning { get; set; }

        // public string AssignedEmployee { get; set; }
        // public decimal IntialOrderTime { get; set; }  
        // public decimal FinalOrderTime { get; set; }
        // public decimal ErrorInTimeEstimate { get; set; }
        // public string OrderStatus { get; set; }
        // public decimal Tip { get; set; }

        // public string CustomerFirstName { get; set; }
        // public string CustomerLastName { get; set; }
        // public string CustomerPhoneNumber { get; set; }

        //Employee compensation (hrly(updatable from manager) + tip), 
        // employee status, employee profile.


    }
}