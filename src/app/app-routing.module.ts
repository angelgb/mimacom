import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './views/cart/cart.component';
import { GroseryComponent } from './views/grosery/grosery.component';

const routes: Routes = [
  { path: 'grosery', component: GroseryComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: GroseryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
