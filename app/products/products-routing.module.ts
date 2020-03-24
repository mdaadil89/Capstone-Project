import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const prodRoutes: Routes = [
  { 
    path: 'products', 
    children: [
      { path: '', component: ProductsComponent },
      { path: ':id', component: ProductDetailComponent },
    ] 
  }
];

@NgModule({
  imports: [ 
    RouterModule.forChild(prodRoutes)
  ],
  exports: [ RouterModule ],
  

})

export class ProductsRoutingModule { }
