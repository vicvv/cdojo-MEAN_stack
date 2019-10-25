import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { ProductResolver } from './resolvers';
import * as fromProducts from './products';

// import { ProductDetailsComponent } from './products/product-details/product-details.component';
// import { ProductEditComponent } from './products/product-edit/product-edit.component';
// import { ProductListComponent } from './products/product-list/product-list.component';
// import { ProductNewComponent } from './products/product-new/product-new.component';
// import { NavComponent } from './nav/nav.component';


const enableTracing = false && !environment.production;

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: fromProducts.ProductListComponent,
        resolve: { products: ProductResolver },
      },
      {
        path: 'new',
        component: fromProducts.ProductNewComponent,
      },
      {
        path: ':product_id',
        component: fromProducts.ProductDetailsComponent,
      },
      {
        path: ':product_id/edit',
        component: fromProducts.ProductEditComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

