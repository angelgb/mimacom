import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart.component';
import { CartService } from './cart.service';

describe('CartComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [BrowserModule, RouterTestingModule],
      providers: [CartService, HttpClient, HttpHandler],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CartComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('getTotal', () => {
    const fixture = TestBed.createComponent(CartComponent);
    const component = fixture.componentInstance;
    expect(component.getTotal).toBeDefined();
    expect(component.getTotal()).toBe(0);
    component.cartService.addToCart({
      id: 1,
      price: 20,
    });
    expect(component.getTotal()).toBe(20);
    component.cartService.addToCart({
      id: 1,
      price: 20,
    });
    component.cartService.addToCart({
      id: 2,
      price: 25,
    });
    expect(component.getTotal()).toBe(65);
  });

  it('checkOut', () => {
    const fixture = TestBed.createComponent(CartComponent);
    const component = fixture.componentInstance;

    expect(component.checkOut).toBeDefined();
    component.checkOut();

    component.cartService.addToCart({
      id: 2,
      price: 25,
    });
    component.checkOut();
  });

  it('navigateToGrcery', () => {
    const fixture = TestBed.createComponent(CartComponent);
    const component = fixture.componentInstance;
    expect(component.navigateToGrocery).toBeDefined();
    component.navigateToGrocery();
  });

  describe('cartService', () => {
    it('addToCart', () => {
      const fixture = TestBed.createComponent(CartComponent);
      const component = fixture.componentInstance;
      expect(component.cartService.addToCart).toBeDefined();
      expect(component.cartService.getCart().length).toBe(0);
      component.cartService.addToCart({
        id: 1,
        price: 20,
      });
      expect(component.cartService.getCart().length).toBe(1);
      component.cartService.addToCart({
        id: 2,
        price: 20,
      });
      expect(component.cartService.getCart().length).toBe(2);
      component.cartService.addToCart({
        id: 2,
        price: 20,
      });
      expect(component.cartService.getCart().length).toBe(2);
    });

    it('removeItem', () => {
      const fixture = TestBed.createComponent(CartComponent);
      const component = fixture.componentInstance;
      expect(component.cartService.removeItem).toBeDefined();
      const testItem = {
        id: 1,
        price: 20,
      };
      component.cartService.addToCart(testItem);
      expect(component.cartService.getCart().length).toBe(1);
      component.cartService.removeItem({
        id: 2,
        price: 20,
      });
      expect(component.cartService.getCart().length).toBe(1);
      component.cartService.removeItem(testItem);
      expect(component.cartService.getCart().length).toBe(0);
    });

    it('getItemFromCart', () => {
      const fixture = TestBed.createComponent(CartComponent);
      const component = fixture.componentInstance;
      expect(component.cartService.getItemFromCart).toBeDefined();
      const testItem = {
        id: '1',
        price: 20,
      };
      component.cartService.addToCart(testItem);
      expect(component.cartService.getItemFromCart('2')).toBe(undefined);
      expect(component.cartService.getItemFromCart('1')).toBe(testItem);
    });

    it('addItems', () => {
      const fixture = TestBed.createComponent(CartComponent);
      const component = fixture.componentInstance;
      expect(component.cartService.addItems).toBeDefined();
      const testItem = {
        count: 1,
        stock: 2,
      };
      component.cartService.addItems(testItem, 1)
      expect(testItem.count).toBe(2)
      component.cartService.addItems(testItem, 1)
      expect(testItem.count).toBe(2)
      component.cartService.addItems(testItem, -1)
      expect(testItem.count).toBe(1)
      component.cartService.addItems(testItem, -1)
      expect(testItem.count).toBe(0)
    });

    it('checkOutItem', () => {
        const fixture = TestBed.createComponent(CartComponent);
        const component = fixture.componentInstance;
        expect(component.cartService.checkOutItem).toBeDefined();
        const testItem = {
          id: '1',
          count: 1,
          stock: 2,
        };
        expect(component.cartService.checkOutItem(testItem)).toBeTruthy()
    })
  });
});
