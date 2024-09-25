import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SigupComponent } from './sigup/sigup.component';
import { SignoutgComponent } from './signoutg/signoutg.component';

const routes: Routes = [

  { path: 'signup', component: SigupComponent },
   { path: 'signout', component: SignoutgComponent },
  {path:'', component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
