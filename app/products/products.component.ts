import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { ProductsService } from './products.service';
import {IProduct} from './product.model'
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import * as uuid from 'uuid';
import { IDropdownSettings } from 'ng-multiselect-dropdown';



@Component({
  selector: 'my-emp',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit,OnChanges {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};
  title: string = 'Product List';
  nameFilter: string = '';
  products: IProduct[];
 
  constructor(private productsService: ProductsService, private _fb: FormBuilder) { 
    this.getData();
    
  }

  ngOnInit() {
   
    this.getData();
    
      this.dropdownList = [
      { item_id: 1, item_text: 'Product Name' },
      { item_id: 2, item_text: 'Product Description' },
      { item_id: 3, item_text: 'Manufacturer' },
      { item_id: 4, item_text: 'Price' },
      { item_id: 5, item_text: 'Quantity' }
    ];
    this.selectedItems = [
      { item_id: 2, item_text: 'Product Description' },
      { item_id: 3, item_text: 'Manufacturer' }
    ];
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
   
  }

  ngOnChanges(){
  }


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }



   getData() 
   {
    this.productsService.getProducts().subscribe(
      (products:IProduct[]) =>  this.products = products,
      err => console.log(err)
      );
    }

    deleteProduct(id: any) {
        this.productsService.removeProduct(id).subscribe(
          //() => console.log(`Product with ID = ${id} has been deleted`),
          //(err) => console.log(err)
            (data:any) => this.getData()
        ); 
      }

}


