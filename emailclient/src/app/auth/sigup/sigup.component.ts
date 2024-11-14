import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatchPassword } from '../validators/match-password';

import { UniqueUserName } from '../validators/unique-user-name';

import { AuthService } from '../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent {
  onSubmit() {
  
    if (this.authForm.invalid) {

      alert("I am Invalid");
      
      return;
    }

    this.auth.signup(this.authForm.value).subscribe({
      
      next:response=> { 
       
        this.route.navigateByUrl('/inbox');


      }, error: (err) => { 
        
        if (!err.status) {
           
          this.authForm.setErrors({noNetwork:true});
         }
      }
      
    });


}

  constructor(private matchPassword:MatchPassword, private uniqueUserName:UniqueUserName, private auth:AuthService , private route:Router){}

  authForm = new FormGroup({

    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20),
    Validators.pattern(/^[a-z0-9]+$/)], [this.uniqueUserName.validate]),
    password: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
     passwordConfirmation: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20)])
  }, { validators: [this.matchPassword.validate] });
  
   usernameControl = this.authForm.get('username') as FormControl;
  passwordControl = this.authForm.get('password') as FormControl;
  passwordConfirmationControl=this.authForm.get('passwordConfirmation') as FormControl;
}
