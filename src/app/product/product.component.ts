import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllProductsService } from '../allproducts.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  product:any={}
  constructor(private route: ActivatedRoute, public _AllProducts: AllProductsService) {}

  ngOnInit(): void {
 const id = Number(this.route.snapshot.paramMap.get("id"))
    this._AllProducts.getAllProducts().subscribe((data) => {
      this.product = data[id - 1]

})
  }


}
