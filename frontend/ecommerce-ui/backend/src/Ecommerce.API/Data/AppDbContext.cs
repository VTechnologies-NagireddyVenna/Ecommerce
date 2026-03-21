using Microsoft.EntityFrameworkCore;
using Ecommerce.API.Model;   // ✅ ADD THIS (VERY IMPORTANT)

namespace Ecommerce.API.Data   // optional but better
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        public DbSet<Product> Products { get; set; }
    }
}