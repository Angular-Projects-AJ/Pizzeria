using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Product : BaseEntity
    {
        // public int ProductId { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }

        public string PictureUrl { get; set; }
        public long Price { get; set; }

        public long Cost { get; set; }

        public long PreWageEarning { get; set; }

        public ProductType ProductType { get; set; }

        public int ProductTypeId { get; set; }

    }
}