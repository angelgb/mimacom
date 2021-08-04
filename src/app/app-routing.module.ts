import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './views/cart/cart.component';
import { GroceryComponent } from './views/grocery/grocery.component';

const routes: Routes = [
  { path: 'grocery', component: GroceryComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: GroceryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
