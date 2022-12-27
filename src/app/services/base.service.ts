import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class BaseService {
  apiUrl = 'https://seal-app-l3d7u.ondigitalocean.app/auth/login';

  constructor(private http: HttpClient) {}

  post<T>(url: string, body?: any): Observable<T> {
    return this.http.post<T>(this.apiUrl + url, body);
  }

  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(this.apiUrl + url, {
      params: new HttpParams({ fromObject: params }),
    });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.apiUrl + url);
  }

  put<T>(url: string, body?: any): Observable<T> {
    return this.http.put<T>(this.apiUrl + url, body);
  }
}
