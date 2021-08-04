import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class GroceryService {
  constructor(private http: HttpClient) { }

  

  getGroceries() {
    return this.http.get('http://localhost:3000/grocery');
  }
}