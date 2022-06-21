using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using AutoMapper; //Installed automapper thorugh nuget gallery
using Core.Entities;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(d => d.ProductType, o => o.MapFrom(s => s.ProductType.Name));
                // Probably will add more configurations here soon
                //
                // 
                // 
                // 
            
        }
    }
}