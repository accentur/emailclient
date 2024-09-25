import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signoutg',
  templateUrl: './signoutg.component.html',
  styleUrls: ['./signoutg.component.css']
})
export class SignoutgComponent implements OnInit  {

  constructor(private authService: AuthService, private route:Router) { }
  
  
  ngOnInit() { 

    this.authService.signout().subscribe(() => {
      
      this.route.navigateByUrl('/');

    });

  }
}
