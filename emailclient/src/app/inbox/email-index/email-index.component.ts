import { Component, OnInit } from '@angular/core';

import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css'],
})
export class EmailIndexComponent implements OnInit {
  constructor(private emailS: EmailService) {}

  emailA = [];

  ngOnInit(): void {
    this.emailS.getEmails().subscribe((value) => {
      this.emailA = value;
    });
  }
}
