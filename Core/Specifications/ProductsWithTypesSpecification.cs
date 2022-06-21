using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductsWithTypesSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesSpecification(string sort)
        {
            AddInclude(x => x.ProductType);
            AddOrderBy(x => x.Name); //

            if(!string.IsNullOrEmpty(sort))
            {
                switch(sort)
                {
                    case "pricesAsc":
                        AddOrderBy(p => p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescendin(p => p.Price);
                        break;
                    default:
                        AddOrderBy(n => n.Name);
                        break;
                }
            }

        }

        public ProductsWithTypesSpecification(int id) 
            : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductType);
        }
    }
}