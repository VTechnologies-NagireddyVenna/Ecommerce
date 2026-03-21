using Ecommerce.Application.Interfaces;
using Ecommerce.Application.Services;
using Microsoft.EntityFrameworkCore;   // ✅ ADD THIS
using Ecommerce.API.Data;   // ✅ IMPORTANT

var builder = WebApplication.CreateBuilder(args);

// ✅ Add Controllers
builder.Services.AddControllers();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ✅ Dependency Injection
builder.Services.AddSingleton<IProductService, ProductService>();

// ✅ DATABASE CONNECTION ADD (VERY IMPORTANT)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// ✅ CORS (Angular connect avvadaniki)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();

// Swagger
app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

// ✅ ENABLE CORS
app.UseCors("AllowAll");

// ✅ Map Controllers
app.MapControllers();

app.Run();
