import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Email } from './email';
import { Observable } from 'rxjs';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<Email> {
  constructor(private emailService: EmailService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;

    return this.emailService.getMail(id).pipe(
      catchError((err) => {
        this.router.navigateByUrl('inbox/not-found');
        return EMPTY;
      })
    );
  }
}
