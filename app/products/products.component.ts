
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import {IProduct} from './product.model'

@Component({
  selector: 'my-emp',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  title: string = 'Product List';
  nameFilter: string = '';
  products: IProduct[];
  productOpen = true;
  selectedProduct: IProduct;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getData();
  }

   getData() 
   {
    this.productsService.getProducts().subscribe(
      (products:IProduct[]) =>  this.products = products,
      err => console.log(err)
      );
    }

    addProduct() {
      this.productOpen = true;
      this.selectedProduct = undefined;
    }

    handleFinish(event) {
      if (event && event.product) {
        if (this.selectedProduct) {
          this.productsService.editProduct(this.selectedProduct.id, event.product);
        } else {
          this.productsService.addProduct(event.product);
        }
      }


  }

}
