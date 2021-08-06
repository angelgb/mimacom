import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  constructor(private http: HttpClient) {}

  private cart: any[] = [];

  private newItem(item: any) {
    item.count = 1;
    this.cart.push(item);
  }

  public removeItem(item: any) {
    this.cart.forEach((element, index) => {
      if (element === item) {
        this.cart.splice(index, 1);
      }
    });
  }

  public addToCart(item: any) {
    const currentItem = this.getItemFromCart(item.id);
    if (currentItem) {
      currentItem.count++;
    } else {
      this.newItem(item);
    }
  }

  public getCart(): any[] {
    return this.cart;
  }

  public getItemFromCart(id: string): any {
    return this.cart.find((currentItem) => currentItem.id === id);
  }

  public addItems(item: any, ammount: number) {
    if (ammount > 0 && item.count < item.stock) {
      item.count++;
    } else if (ammount < 0) {
      item.count--;
      if (item.count === 0) {
        this.removeItem(item);
      }
    }
  }
  
  public checkOutItem(item: any) {
    const url = `http://localhost:3000/grocery/${item.id}`;
    return this.http.patch(url, { stock: item.stock - item.count });
  }
}
