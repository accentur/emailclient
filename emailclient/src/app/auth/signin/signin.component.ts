import { Component, OnInit } from '@angular/core';

import { FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  authForm = new FormControl({
    username: new FormControl(''),
    password:new FormControl('')

  });

  ngOnInit(): void {
  
  }

}
