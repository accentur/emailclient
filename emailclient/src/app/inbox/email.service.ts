import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from './email';

interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private httpClient: HttpClient) {}

  getEmails() {
    return this.httpClient.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }

  getMail(id: string) {
    return this.httpClient.get<Email>(`${this.rootUrl}/emails/${id}`);
  }
}
