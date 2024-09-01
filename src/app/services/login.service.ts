import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { UserLogin } from './../interfaces/user-login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = 'http://localhost:3000';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<UserLogin> {
    return this.httpClient
      .post<UserLogin>(this.API + '/login', { email, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('user-token', value.token),
            sessionStorage.setItem('user-email', value.email);
        })
      );
  }
}
