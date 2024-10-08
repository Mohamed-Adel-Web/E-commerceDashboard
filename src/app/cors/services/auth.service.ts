import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _HttpClient = inject(HttpClient);
  setLoginData(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/auth/sign-in`, data);
  }
  setRegisterData(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/auth/signup`, data);
  }
}
