import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SigupComponent } from './sigup/sigup.component';

import { SharedModule } from '../shared/shared.module';
import { SignoutgComponent } from './signoutg/signoutg.component';


@NgModule({
  declarations: [
    SigninComponent,
    SigupComponent,
    SignoutgComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
