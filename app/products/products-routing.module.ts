import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductGuardService } from './product-add/addemployee-guard.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGaurdService } from './product-gaurd.service';

const prodRoutes: Routes = [
  { 
    path: 'products', 
    children: [
      { path: '', component: ProductsComponent ,
      canDeactivate: [AddProductGuardService]},
      { path: 'add', component: ProductAddComponent ,
      canActivate: [ProductGaurdService]
    },
      { path: ':id', component: ProductDetailComponent,
      canActivate: [ProductGaurdService] }
      ,
      { path: 'edit/:id', component: ProductsComponent,
      canActivate: [ProductGaurdService] }
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
