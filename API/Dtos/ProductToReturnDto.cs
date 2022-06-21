using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace API.Dtos
{
    public class ProductToReturnDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }

        public string PictureUrl { get; set; }
        public long Price { get; set; }

        public long Cost { get; set; }

        public long PreWageEarning { get; set; }

        public string ProductType { get; set; }

    }
}