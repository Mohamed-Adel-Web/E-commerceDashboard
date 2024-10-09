import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly _HttpClient = inject(HttpClient);
  getCategories(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/categories`);
  }
  addCategory(category: Category): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/categories`, category);
  }
  updateCategory(category: Category, id: string): Observable<any> {
    return this._HttpClient.put(
      `${environment.baseUrl}/categories/${id}`,
      category
    );
  }
  deleteCategory(id: string): Observable<any> {
    return this._HttpClient.delete(`${environment.baseUrl}/categories/${id}`);
  }
}
