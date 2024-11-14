import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable } from 'rxjs';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  id: number;
  email: Email;
  constructor(private route: ActivatedRoute) {
    this.email = this.route.snapshot.data['email'];
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    });
  }

  ngOnInit(): void {
    // this.route.params.subscribe((value) => {
    //   this.id = +value;
    // });
    // this.route.params
    //   .pipe(
    //     switchMap(({ id }) => {
    //       return this.emailService.getMail(id);
    //     })
    //   )
    //   .subscribe((emailR) => {
    //     this.email = emailR;
    //   });
  }
}
