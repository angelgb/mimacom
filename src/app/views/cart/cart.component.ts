import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  public bgImageParser(url: string): string {
    return `url("${url}")`;
  }

  public getTotal(): number {
    const cart = this.cartService.getCart();
    let total: number = 0;
    for (const item of cart) {
      total += item.count * item.price;
    }
    return total;
  }

  public checkOut() {
    if (this.getTotal()) {
      this.cartService.getCart().forEach((item) => {
        this.cartService.checkOutItem(item).subscribe(() => {
          this.cartService.removeItem(item)
        }, ((error) => {
          alert('producto no actualizado: ' + error)
        }))
      })
    }
  }
}
