import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  constructor(private authService:AuthService , private router:Router) {
   

 }
  
  authForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20),
    Validators.pattern(/^[a-z0-9]+$/)]),
    password:new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20)])

  });

  usernameControl = this.authForm.get('username') as FormControl;
  passwordControl = this.authForm.get('password') as FormControl;

  ngOnInit(): void {
  
  }

  onSubmit() {

    if (this.authForm.invalid) {
     
      return;
    }    
    
    this.authService.signin(this.authForm.value).subscribe({

      next: () => {
        
        this.router.navigateByUrl('/inbox');

      },

      error: ({ error}) => {
        
        //console.log(err);

        if (error.username || error.password) {
          
             this.authForm.setErrors({crednetials:true});
        }
        
     

      }

    });
    
}

}
