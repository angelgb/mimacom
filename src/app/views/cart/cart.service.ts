import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class CartService {
  constructor(private http: HttpClient) {}

  private cart: any[] = [];

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

  private newItem(item: any) {
    item.count = 1;
    this.cart.push(item);
  }
}
