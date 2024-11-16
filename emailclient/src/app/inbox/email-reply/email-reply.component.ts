import { Component, Input, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent {
  constructor(private eService: EmailService) {}
  ngOnChanges(): void {
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE:${this.email.subject}`,
    };
  }
  submiteNewEmail(email: Email) {
    this.eService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
  showModal = false;
  @Input() email: Email;
}
