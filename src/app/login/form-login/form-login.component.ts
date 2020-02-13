import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    this.userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value);
    this.router.navigate(['/']);
  }

}
