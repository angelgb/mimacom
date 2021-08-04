import { GroceryService } from './grocery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grocery',
  templateUrl: './grocery.component.html',
  //styleUrls: ['./app.component.sass']
})
export class GroceryComponent implements OnInit{
  public groceries: any
  constructor (private groceryService: GroceryService){}
  ngOnInit(): void {
    this.groceryService.getGroceries()
    .subscribe((data) => this.groceries = data);
  }
}
