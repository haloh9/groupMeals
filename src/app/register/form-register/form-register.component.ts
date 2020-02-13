import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  registerForm: FormGroup;
  onSubmit() {
    return true;
  }
  validateYnovEmail(control: AbstractControl) {
    if (control.value.endsWith('@ynov.com')) {
      return { validEmail: true };
    }
    return null;
  }
  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(),
      notificationPreferenceEmail: new FormControl(false),
      notificationPreferenceSms: new FormControl(false),
      notificationPreferencePush: new FormControl(false),
      secretQuestion: new FormControl(''),
      secretAnswer: new FormControl(''),
    });
  }

}
