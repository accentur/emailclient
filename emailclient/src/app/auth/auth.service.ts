import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface AvialableUserResponse{

  available:boolean
}


interface SignUpCredentials{

  username?: string;
  password?: string;
  passwordConfirmation?: string;
}

interface SignUpResponse{

  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  rootUrl: string = 'https://api.angular-email.com';
  signed$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }
  
  checkUniqueUserName(username: string) {
    
    return this.http.post<AvialableUserResponse>(this.rootUrl+'/auth/username', {
      username
    });
  }

  signup(credentials:SignUpCredentials) {
    
    return this.http.post<SignUpResponse>(this.rootUrl + '/auth/signup', credentials).pipe(
      tap(() => {
        
        this.signed$.next(true);
      })
    );

  }
}


