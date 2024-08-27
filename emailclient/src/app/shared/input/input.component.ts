import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


showerrors(): any {
  const { dirty, touched, errors } = this.control;

  return dirty && touched && errors;

}
  ngOnInit(): void {
  }

  constructor(){}

  @Input() label: string='';
  @Input() control: FormControl;
  @Input() inputType: string;


}
