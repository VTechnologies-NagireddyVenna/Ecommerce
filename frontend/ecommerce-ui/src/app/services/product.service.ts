import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5115/api/Product';
  private cartUrl = 'http://localhost:5115/api/Cart'; // ✅ NEW

  constructor(private http: HttpClient) {}

  // ✅ GET PRODUCTS
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ✅ ADD TO CART (NEW METHOD)
  addToCart(product: any): Observable<any> {
    return this.http.post(this.cartUrl, {
      name: product.name,
      price: product.price
    });
  }
}