import { Component } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signedin$ = false;
  signedin1$: BehaviorSubject<boolean>;


  
  constructor(private authService: AuthService) {

    this.signedin1$=this.authService.signed$
  }

  ngOnInit() {

    this.authService.signed$.subscribe(s => { 

      this.signedin$ = s;
    });
    
  }

  
}
