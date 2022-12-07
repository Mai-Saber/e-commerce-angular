import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
  {path:"home", component:AllProductsComponent},
  {path:"login", component:FormComponent},
  { path: "product/:id", component: ProductComponent },
  {path:"", redirectTo:"login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
