import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';

// import { PRODUCTS } from '../data/product-data';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private readonly base = 'http://59498bce6d49df0011102cfc.mockapi.io/products';
  private readonly base = '/api/products';

  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base);

  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.base}/${id}`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.base}/${product._id}`, product);
  }

  // createProduct(product: Product): Observable<Product> {
  //   console.log('I am in create product service', product);
  //   return this.http.post<Product>(`${this.base}`, product);
  // }
  createProduct(product: Product) {
    console.log('I am in create product service', product);
    return this.http.post(`${this.base}`, product);
  }

  removeProduct(id: string): Observable<Product> {
    console.log('I am in remove product service and the id that I am deleting is: ', id);
    return this.http.delete<Product>(`${this.base}/${id}`);
  }
}
