import { Component, OnInit } from '@angular/core';
import {AllProductsService} from "../allproducts.service"

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  allProducts: any = []



  constructor(public _AllProducts: AllProductsService){}

  ngOnInit(): void {
    this._AllProducts.getAllProducts().subscribe((data) => {
        // slice because data is an array included 100 index
        this.allProducts = data.slice(0,15)
    })
  }

  category = [
    { name: "Electronics", id: 1 },
    { name: "Electronics", id: 4 },
    { name: "Electronics", id: 5 },
    { name: "Electronics", id: 6 },
    { name: "Electronics", id: 7 },
  ]
  filters = [
    {name:"price 100 :200", id:1},
    {name:"price 200 :300", id:2},
    {name:"price 300 :400", id:3},
    {name:"price 400 :500", id:4},
    {name:"price 100 :300", id:5},
    {name:"price 100 :300", id:6},
    {name:"price 100 :300", id:7}
  ]

}
