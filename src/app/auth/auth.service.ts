import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Subject, tap } from 'rxjs';
import { throwError } from 'rxjs';

import { AuthResponseData } from '../interfaces/authResponse';
import { LoginData } from '../interfaces/loginResponse';
import { User } from '../interfaces/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new Subject<User>();

  constructor(private http: HttpClient) {}

  signup(firstName: string, lastName: string, email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://seal-app-l3d7u.ondigitalocean.app/auth/signup',
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }
      )
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An unknown error occurred';
          if ((errorRes.error.message = 'email already exists')) {
            errorMessage = 'This email is already in use';
          }
          return throwError(() => errorMessage);
        }),
        tap((resData) => {
          //cosnt user = new User(resData.email, resData.id, resData.)
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<LoginData>('https://seal-app-l3d7u.ondigitalocean.app/auth/login', {
        email: email,
        password: password,
      })
      .pipe(
        tap((resData: LoginData) => {
          this.setToken(resData.accessToken);
          this.setUser(resData.user);
        })
      );
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  signOut() {
    localStorage.clear();
  }
}
