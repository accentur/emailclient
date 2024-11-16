import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Email } from '../inbox/email';

interface AvialableUserResponse {
  available: boolean;
}

interface SignUpCredentials {
  username?: string;
  password?: string;
  passwordConfirmation?: string;
}

interface SignInCredential {
  username?: string;
  password?: string;
}

interface SignUpResponse {
  username: string;
  authenticated: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl: string = 'https://api.angular-email.com';
  signed$ = new BehaviorSubject(null);
  username: string = '';

  constructor(private http: HttpClient) {}

  checkUniqueUserName(username: string) {
    return this.http.post<AvialableUserResponse>(
      this.rootUrl + '/auth/username',
      {
        username,
      }
    );
  }

  signup(credentials: SignUpCredentials) {
    return this.http
      .post<SignUpResponse>(`${this.rootUrl}/auth/signup`, credentials)
      .pipe(
        tap(({ username }) => {
          this.signed$.next(true);
          this.username = username;
        })
      );
  }

  checkAuth() {
    return this.http.get<SignUpResponse>(`${this.rootUrl}/auth/signedin`).pipe(
      tap(({ authenticated, username }) => {
        this.signed$.next(authenticated);
        this.username = username;
      })
    );
  }
  signout() {
    return this.http.post(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signed$.next(false);
      })
    );
  }

  signin(signin: SignInCredential) {
    return this.http.post(`${this.rootUrl}/auth/signin`, signin).pipe(
      tap(() => {
        this.signed$.next(true);
      })
    );
  }
}
