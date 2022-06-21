
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore.Design;
using Infrastructure.Data;
using Core.Interfaces;
using API.Helpers;

namespace API
{
    public class Startup
    {
        public readonly IConfiguration _config;
        
        public Startup(IConfiguration config)
        {
            _config = config;
    
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped(typeof(IGenericRepository<>), (typeof(GenericRepository<>)));
            services.AddAutoMapper(typeof(MappingProfiles));
            services.AddControllers();
            // services.AddSwaggerGen(c =>
            // {
            //     c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebAPIv5", Version = "v1" });
            // });
            services.AddDbContext<StoreContext> (x => x.UseSqlite(_config.GetConnectionString("DefaultConnection"))); //setting up the generation of the database
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                // app.UseSwagger();
                // app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebAPIv5 v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            //configure in the line below static files, for you it is the product images.
            app.UseStaticFiles();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
