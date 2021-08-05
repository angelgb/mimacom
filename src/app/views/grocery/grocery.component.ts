import { CartService } from './../cart/cart.service';
import { GroceryService } from './grocery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grocery',
  templateUrl: './grocery.component.html',
})
export class GroceryComponent implements OnInit {
  public groceries: any[] = [];
  constructor(
    private groceryService: GroceryService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.groceryService.getGroceries().subscribe((data: any) => {
      this.groceries = this.groceries.concat(data);
      if (data.length === this.groceryService.getPageSize()) {
        this.groceryService.nextPage();
        this.loadData();
      }
    });
  }

  public bgImageParser(url: string): string {
    return `url("${url}")`;
  }

  public addToCart(item: any) {
    if (this.availability(item)) {
      this.cartService.addToCart(item);
    }
  }

  public availability(item: any): boolean {
    const itemInCart = this.cartService.getItemFromCart(item.id);
    if (itemInCart) {
      return item.stock - itemInCart.count > 0;
    }
    return item.stock > 0;
  }
}
