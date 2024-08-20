import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatchPassword } from '../validators/match-password';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent {

  constructor(private matchPassword:MatchPassword){}

  authForm = new FormGroup({

    username: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-z0-9]+$/)]),
    password: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
     passwordConfirmation: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20)])
  }, { validators:[this.matchPassword.validate]});

}
