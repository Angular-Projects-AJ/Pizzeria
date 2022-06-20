using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }

        public long Price { get; set; }

        public long Cost { get; set; }

        public long PreWageEarning { get; set; }
    }
}