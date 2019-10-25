import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ProductService } from '../services';
import { Product } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class ProductResolver implements Resolve<Product[]> {
  constructor(private readonly productService: ProductService) {}

  resolve(): Observable<Product[]> {
    return this.productService.getProducts();
  }
}
