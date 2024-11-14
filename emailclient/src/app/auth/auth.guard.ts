import { CanMatchFn } from '@angular/router';

import { AuthService } from './auth.service';
import { inject } from '@angular/core';

import { take, skipWhile } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

export const authGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.signed$.pipe(
    skipWhile((val) => val === null),
    take(1),
    tap((authenticated) => {
      if (!authenticated) {
        router.navigateByUrl('/');
      }
    })
  );
};
