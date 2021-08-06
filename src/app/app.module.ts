import { GroceryModule } from './views/grocery/grocery.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './views/cart/cart.module';
import { GroceryComponent } from './views/grocery/grocery.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GroceryModule],
  providers: [CartModule, GroceryComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
