import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products implements OnInit {

  // ✅ STATIC DATA (fallback + extra products)
  products = [
    {
      name: 'iPhone 15',
      price: 79999,
      imageUrl: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg'
    },
    {
      name: 'Laptop',
      price: 59999,
      imageUrl: 'https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg'
    },
    {
      name: 'Headphones',
      price: 1999,
      imageUrl: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._SX679_.jpg'
    },
    {
      name: 'Smart Watch',
      price: 4999,
      imageUrl: 'https://m.media-amazon.com/images/I/61y2VVWcGBL._SX679_.jpg'
    },
    {
      name: 'Keyboard',
      price: 999,
      imageUrl: 'https://m.media-amazon.com/images/I/61aUBxqc5PL._SX679_.jpg'
    },
    {
      name: 'Mouse',
      price: 499,
      imageUrl: 'https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg'
    },
    {
      name: 'Monitor',
      price: 12999,
      imageUrl: 'https://m.media-amazon.com/images/I/71w3oJ7aWyL._SX679_.jpg'
    },

    // 🔥 EXTRA PRODUCTS
    {
      name: 'Gaming Chair',
      price: 8999,
      imageUrl: 'https://m.media-amazon.com/images/I/81mX+T3mGZL._SX679_.jpg'
    },
    {
      name: 'Tablet',
      price: 24999,
      imageUrl: 'https://m.media-amazon.com/images/I/61NGnpjoRDL._SX679_.jpg'
    },
    {
      name: 'Bluetooth Speaker',
      price: 2999,
      imageUrl: 'https://m.media-amazon.com/images/I/71l2xvFJXDL._SX679_.jpg'
    },
    {
      name: 'DSLR Camera',
      price: 45999,
      imageUrl: 'https://m.media-amazon.com/images/I/914hFeTU2-L._SX679_.jpg'
    },
    {
      name: 'Power Bank',
      price: 1499,
      imageUrl: 'https://m.media-amazon.com/images/I/71lVwl3q-kL._SX679_.jpg'
    }
  ];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // ✅ SAFE API CALL (UI break avvadhu)
  loadProducts() {
    this.service.getProducts().subscribe({
      next: (data: any[]) => {
        console.log("API DATA:", data);

        // API data unte replace chestundi
        if (data && data.length > 0) {
          this.products = data;
        }
      },
      error: (err) => {
        console.error("API failed, using static data", err);
      }
    });
  }

  // ✅ FINAL ADD TO CART (API + DB)
  addToCart(product: any) {
    this.service.addToCart(product).subscribe({
      next: () => {
        alert('✅ Added to cart (saved in DB)');
      },
      error: (err) => {
        console.error(err);
        alert('❌ Failed to add to cart');
      }
    });
  }
}