import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';


import { Product } from '../../models/product';
import { ProductService } from '../../services';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  selectedProduct: Product;
  product: Product[] = [];
  products = [];

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    // this retrieves the resolved data
    // this.route.data
    //   .pipe(
    //     map(({ products }: { products: Product[] }) => products),
    //     takeUntil(this.unsubscribe$)
    //   )
    //   .subscribe(products => {
    //     this.product = products;
    //   });
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  // onSelect(book: Book) {
  //   console.log('selecting book');
  //   // (expression) ? (if true) : (if false)
  //   this.selectedBook = this.selectedBook === book ? null : book;
  //   // if (this.selectedBook === book) {
  //   //   this.selectedBook = null;
  //   // } else {
  //   //   this.selectedBook = book;
  //   // }
  // }


  onDelete(id: string) {
    this.productService
      .removeProduct(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(deletedProduct => {
        console.log('deleted product', deletedProduct);
        this.products = this.products.filter(product => product._id !== deletedProduct._id);
        //this.router.navigate(['/products']);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
