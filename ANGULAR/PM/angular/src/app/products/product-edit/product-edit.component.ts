import { Component, OnInit} from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';

import { map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,

  ) {}

  ngOnInit() {
    console.log(this.route.paramMap);
    this.route.paramMap
      .pipe(
        map(params => params.get('product_id')),
        switchMap(id => this.productService.getProduct(id))
      )

      .subscribe({
        next: product => {
          (this.product = product);
          console.log(this.product)
        },
        error: error => {
          console.log(error);
        },
      });
  }

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    const {value: product} : {value: Product} = form;
    this.productService.updateProduct(product).subscribe(updateProduct => {
      console.log('updated product', updateProduct);
      this.router.navigate(['/products']);

    });
  }
}
