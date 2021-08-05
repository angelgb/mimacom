import { Component } from '@angular/core';
import { GroceryComponent} from './views/grocery/grocery.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'mimacom';

  constructor(public groceryComponent: GroceryComponent) {}

  public reloadData(){
    this.groceryComponent.reloadData()
  }
}
