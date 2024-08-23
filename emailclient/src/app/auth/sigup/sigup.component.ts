import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatchPassword } from '../validators/match-password';

import { UniqueUserName } from '../validators/unique-user-name';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent {

  constructor(private matchPassword:MatchPassword, private uniqueUserName:UniqueUserName){}

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
