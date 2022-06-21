using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    // [ApiController]
    [Route("api/[controller]")]

    public class ProductsController : ControllerBase
    {
        private readonly IGenericRepository<Product> _productsRepo;
        public readonly IGenericRepository<ProductType> _productTypeRepo;
    
        public ProductsController(IGenericRepository<Product> productsRepo, IGenericRepository<ProductType> productTypeRepo)
        {
            _productTypeRepo = productTypeRepo;
            _productsRepo = productsRepo;
           
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts() //returning an http response status
        {
            var spec = new ProductsWithTypesSpecification();

            var products = await _productsRepo.ListAsync(spec); //using async linqish method

            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var spec = new ProductsWithTypesSpecification(id);

            return await _productsRepo.GetEntityWithSpec(spec); //retrieving the specific product with its id.
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes(){
            return Ok(await _productTypeRepo.ListAllAsync());
        }
    }


    // [Route("[controller]")]
    // public class ProductsController : Controller
    // {
    //     private readonly ILogger<ProductsController> _logger;

    //     public ProductsController(ILogger<ProductsController> logger)
    //     {
    //         _logger = logger;
    //     }

    //     public IActionResult Index()
    //     {
    //         return View();
    //     }

    //     [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    //     public IActionResult Error()
    //     {
    //         return View("Error!");
    //     }
    // }
}