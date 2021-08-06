import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { GroceryComponent } from './grocery.component';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart/cart.service';
import { GroceryService } from './grocery.service';

describe('GroceryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceryComponent, CartComponent],
      imports: [BrowserModule, RouterTestingModule],
      providers: [CartService, GroceryService, HttpClient, HttpHandler],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(GroceryComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('loadData', () => {
    const fixture = TestBed.createComponent(GroceryComponent);
    const component = fixture.componentInstance;
    expect(component.reloadData).toBeDefined();
  });

  it('bgImageParser', () => {
    const fixture = TestBed.createComponent(GroceryComponent);
    const component = fixture.componentInstance;
    expect(component.bgImageParser).toBeDefined();
    expect(component.bgImageParser('imgUrl')).toBe('url("imgUrl")');
  });

  it('getGroceries', () => {
    const fixture = TestBed.createComponent(GroceryComponent);
    const component = fixture.componentInstance;
    expect(component.getGroceries).toBeDefined();
    component.groceries = [{ favorite: 1 }, { favorite: 0 }];
    expect(component.getGroceries().length).toBe(2);
    component.showFavorite = true;
    expect(component.getGroceries().length).toBe(1);
  });

  it('setFavoriteItem', () => {
    const fixture = TestBed.createComponent(GroceryComponent);
    const component = fixture.componentInstance;
    expect(component.setFavoriteItem).toBeDefined();
  });

  it('reloadData', () => {
    const fixture = TestBed.createComponent(GroceryComponent);
    const component = fixture.componentInstance;
    expect(component.reloadData).toBeDefined();
    component.groceries = [{ favorite: 1 }, { favorite: 0 }];
    component.reloadData();
    expect(component.groceries.length).not.toBe(2);
  });

  it('addToCart', () => {
    const fixture = TestBed.createComponent(GroceryComponent);
    const component = fixture.componentInstance;
    expect(component.reloadData).toBeDefined();
    const testItem = {
      id: '1',
      stock: 3,
      count: 1,
    };
    component.addToCart(testItem);
  });

  it('availability', () => {
    const fixture = TestBed.createComponent(GroceryComponent);
    const component = fixture.componentInstance;
    expect(component.availability).toBeDefined();
  });

  it('navigateToCart', () => {
    const fixture = TestBed.createComponent(GroceryComponent);
    const component = fixture.componentInstance;
    expect(component.navigateToCart).toBeDefined();
    component.navigateToCart();
  });
});
