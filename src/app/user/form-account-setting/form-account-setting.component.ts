import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-account-setting',
  templateUrl: './form-account-setting.component.html',
  styleUrls: ['./form-account-setting.component.css']
})
export class FormAccountSettingComponent implements OnInit {

  settingAccountForm: FormGroup;
  onSubmit() {
    return true;
  }

  ngOnInit() {
    this.settingAccountForm = new FormGroup({
      firstName: new FormControl({value: 'Dimitri', disabled: true}),
      lastName: new FormControl({value: 'Payet', disabled: true}),
      userName: new FormControl({value: 'dimitri.payet', disabled: true}),
      password: new FormControl('rezrezrez'),
      email: new FormControl({value: 'dimitri.payet@ynov.com', disabled: true}),
      phone: new FormControl(''),
      notificationPreferenceEmail: new FormControl(false),
      notificationPreferenceSms: new FormControl(true),
      notificationPreferencePush: new FormControl(false),
      secretQuestion: new FormControl({value: 'Mon meilleur but de l\'année ?? ', disabled: true}),
      secretAnswer: new FormControl('hehehehehe'),
    });
  }
}
