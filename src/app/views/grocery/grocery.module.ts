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
  providers: [GroceryService],
  bootstrap: [GroceryComponent]
})
export class GroceryModule { }
