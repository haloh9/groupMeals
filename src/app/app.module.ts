import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RestaurantFiltersComponent } from './restaurant-filters/restaurant-filters.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantCardComponent } from './restaurant-list/restaurant-card/restaurant-card.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRegisterComponent } from './register/form-register/form-register.component';
import { LoginComponent } from './login/login.component';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { UserComponent } from './user/user.component';
import { FormAccountSettingComponent } from './user/form-account-setting/form-account-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RestaurantFiltersComponent,
    RestaurantListComponent,
    RestaurantCardComponent,
    RegisterComponent,
    FormRegisterComponent,
    LoginComponent,
    FormLoginComponent,
    UserComponent,
    FormAccountSettingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
