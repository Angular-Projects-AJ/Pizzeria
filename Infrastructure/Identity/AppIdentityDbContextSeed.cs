using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Aaron",
                    Email = "Aaron@test.com",
                    UserName = "Aaron@test.com",
                    Address = new Address
                    {
                        FirstName = "Aaron",
                        LastName = "Jerez",
                        Street = "10 The Street",
                        City = "New York",
                        State = "NY",
                        ZipCode = "90210",
                    }
                };
                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}