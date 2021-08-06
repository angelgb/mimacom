import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [],
  imports: [BrowserModule],
  providers: [CartService],
  bootstrap: [CartComponent],
})
export class CartModule {}
