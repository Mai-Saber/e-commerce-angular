import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllProductsService } from '../allproducts.service';

@Component({
  selector: 'app-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.css']
})
export class ProductNavComponent implements OnInit{
  quantity: any = 1;
  product: any = {}

 constructor(private route: ActivatedRoute, public _AllProducts: AllProductsService) {}

  ngOnInit(): void {
 const id = Number(this.route.snapshot.paramMap.get("id"))
    this._AllProducts.getAllProducts().subscribe((data) => {
      this.product = data[id - 1]

})
  }


  handleIncrease():void {
    this.quantity += 1
  }
  handleDecrease():void {
    this.quantity -= 1
  }
  handleAddCart(): void{
    localStorage.setItem('quantity', this.quantity)

  }


}
