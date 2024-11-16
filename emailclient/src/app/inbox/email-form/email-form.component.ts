import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Email } from '../email';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  onSubmit() {
    this.submitnewEmail.emit(this.emailForm.value);
  }
  emailForm: FormGroup;

  @Input() emailI: Email;
  @Output() submitnewEmail = new EventEmitter();

  fromcontrolName: FormControl;
  tocontrolName: FormControl;
  subcontrolName: FormControl;
  textcontrolName: FormControl;

  ngOnInit(): void {
    const { subject, from, to, text } = this.emailI;

    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });

    this.fromcontrolName = this.emailForm.get('from') as FormControl;
    this.tocontrolName = this.emailForm.get('to') as FormControl;
    this.subcontrolName = this.emailForm.get('subject') as FormControl;
    this.textcontrolName = this.emailForm.get('text') as FormControl;
  }
}
