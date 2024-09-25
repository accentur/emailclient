import { Component } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //signedin$ = false;
  //signedin1$:any;
signedin$: BehaviorSubject<boolean>;

  
  constructor(private authService: AuthService) {
 
    this.signedin$ = this.authService.signed$;
  }

  ngOnInit() {

     //this.authService.signed$.subscribe(s => {
    //     alert("ngOnInit");
    //   alert(s);
     //this.signedin$ = s;

    //});

    this.authService.checkAuth().subscribe(() => {
      
    });
    
  }

  
}
