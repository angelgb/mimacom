import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class GroceryService {
  constructor(private http: HttpClient) {}

  private PAGE_SIZE = 20;
  private currentPage = 1;

  getGroceries() {
    return this.http.get(
      `http://localhost:3000/grocery?_page=${this.currentPage}&_limit=${this.PAGE_SIZE}`
    );
  }

  getPageSize(): number {
    return this.PAGE_SIZE;
  }

  nextPage(): void{
    this.currentPage++
  }
}
