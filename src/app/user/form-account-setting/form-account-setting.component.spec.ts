import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAccountSettingComponent } from './form-account-setting.component';

describe('FormAccountSettingComponent', () => {
  let component: FormAccountSettingComponent;
  let fixture: ComponentFixture<FormAccountSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAccountSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAccountSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
