using Ecommerce.Application.Interfaces;
using Ecommerce.Domain.Entities;

namespace Ecommerce.Application.Services;

public class ProductService : IProductService
{
    private static List<Product> products = new();

    public Task<List<Product>> GetAllAsync()
    {
        return Task.FromResult(products);
    }

    public Task AddAsync(Product product)
    {
        product.Id = products.Count + 1;
        products.Add(product);
        return Task.CompletedTask;
    }
}
