import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';
import {IProduct} from './product.model'
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import * as uuid from 'uuid';

import {ProductDeleteComponent} from './product-delete/product-delete.component'
import { Router } from '@angular/router';



@Component({
  selector: 'my-emp',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  
  title: string = 'Product List';
  nameFilter: string = '';
  products: IProduct[];
  showFilter: false;
  myForm: FormGroup;
  toppings = new FormControl();
   id:string[]=[];
  i:number=0;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  selected: boolean=true;
  
  @ViewChild(ProductDeleteComponent ,  { static: true }) child: ProductDeleteComponent;
  ngViewInit() {
    this.child.selected = this.selected;
  }

  constructor( private fb: FormBuilder,private productsService: ProductsService, private _fb: FormBuilder,
    private router : Router) { 
    
  }

  
    addId(id){
      
      if(this.id.find(x=>x==id))
       {
        this.id.splice(this.id.indexOf(id),1)
       }
       else{
        this.id.push(id);
       }
      console.log(this.child.selected);
       if (this.id.length===0)
 
       this.child.selected=true;
       
       else
       this.child.selected=false;
        
       console.log(this.child.selected);
    }


  deleteSelected(event){

    console.log("In delete selected");
    console.log(event);


    if(event == "true")
    {
      
    this.id.forEach(x=> {this.productsService.removeProduct(x).subscribe(
      (data:any) => 
      this.getData() )})
      console.log("IN DELETE SELECTED")
      
     }
     //this.router.navigate(['products']);
  } 
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

    

}


