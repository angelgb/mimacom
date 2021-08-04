import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GroseryComponent } from './grosery.component';

@NgModule({
  declarations: [
    GroseryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GroseryComponent]
})
export class GroseryModule { }
