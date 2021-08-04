import { CartComponent } from './views/cart/cart.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './views/cart/cart.module';
import { GroseryModule } from './views/grosery/grosery.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GroseryModule
  ],
  providers: [CartModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
