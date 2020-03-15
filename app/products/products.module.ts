import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module'
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';


@NgModule({
    imports: [SharedModule,
        ProductsRoutingModule
    ],
    declarations: [ProductsComponent, ProductDetailComponent,ProductAddComponent],
    
  })
  export class ProductsModule { }