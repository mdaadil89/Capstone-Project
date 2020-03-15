
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'my-emp',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  title: string = 'Product List';
  nameFilter: string = '';
  products: any[];
  
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getEmployees();
  }
}
