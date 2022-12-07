import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import   {ReactiveFormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixedNavComponent } from './fixed-nav/fixed-nav.component';
import { FormComponent } from './form/form.component';
import { ProductComponent } from './product/product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductNavComponent } from './product-nav/product-nav.component';
import { CutPipe } from './cut.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FixedNavComponent,
    FormComponent,
    ProductComponent,
    AllProductsComponent,
    ProductNavComponent,
    CutPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
