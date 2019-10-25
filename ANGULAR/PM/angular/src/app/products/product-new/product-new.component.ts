import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../../services';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  product = new Product();
  @Output()
  createProduct = new EventEmitter<Product>();


  constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    // this.products.push(this.product);
    // this.createProduc.emit(this.product);
    console.log ('how product looks like:', this.product );
    this.productService.createProduct(this.product).subscribe(createProduct => {
      console.log('created', createProduct);
      this.product = new Product();
      form.reset();

      // this.router.navigate(['/'])
      // this.router.navigateByUrl('/home');
    });
    this.router.navigate(['/products']);
    console.log('submitting from create component l.41', this.product);
  }
}
