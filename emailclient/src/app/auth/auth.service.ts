import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AvialableUserResponse{

  available:boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  checkUniqueUserName(username: string) {
    
    return this.http.post<AvialableUserResponse>('https://api.angular-email.com/auth/username', {
      username
    });
  }
}
