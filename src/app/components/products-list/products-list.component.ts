import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
   listProdcut=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
    product:Product;
    // searchFilter:any;
    input:any;
    test:any;

  constructor() { }

  ngOnInit(): void {
    
  }
  like(event:Event,id:any){
    this.listProdcut.forEach(element => {
        if(element.id==id){
          element.like++;
        }
    });
  }
  buy(event:Event,id:any){
    this.listProdcut.forEach(element => {
        if(element.id==id && element.quantity>0){
          element.quantity--;
        }
    });
  }
}
