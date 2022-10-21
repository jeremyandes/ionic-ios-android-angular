import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../interfaces/menu-item.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonPlaceholderURL: string = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient,
  ) { }

  public getUsers(): Observable<any> {
    return this.http.get(`${this.jsonPlaceholderURL}/users`);
  }

  public getMenuOptions(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`assets/data/menu-options.json`);
  }
}