import { CartService } from './../cart/cart.service';
import { GroceryService } from './grocery.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GroceryComponent } from './grocery.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GroceryService, CartService],
  bootstrap: [GroceryComponent]
})
export class GroceryModule { }
