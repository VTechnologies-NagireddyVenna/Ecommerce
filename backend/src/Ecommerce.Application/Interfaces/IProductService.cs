using Ecommerce.Domain.Entities;

namespace Ecommerce.Application.Interfaces;

public interface IProductService
{
    Task<List<Product>> GetAllAsync();
    Task AddAsync(Product product);
}
