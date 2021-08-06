import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GroceryService {
  constructor(private http: HttpClient) {}

  private PAGE_SIZE = 20;
  private currentPage = 1;
  private BASE_PATH = 'http://localhost:3000/grocery'

  public getGroceries(): Observable<object> {
    return this.http.get(
      `${this.BASE_PATH}?_page=${this.currentPage}&_limit=${this.PAGE_SIZE}`
    );
  }

  public patchFavorite(item: any): Observable<object> {
    const url = `${this.BASE_PATH}/${item.id}`;
    return this.http.patch(url, { favorite: item.favorite ? 0 : '1' });
  }

  public getPageSize(): number {
    return this.PAGE_SIZE;
  }

  public nextPage() {
    this.currentPage++;
  }

  public resetPage() {
    this.currentPage = 1;
  }
}
