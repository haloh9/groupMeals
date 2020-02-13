import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { ConfirmComponent } from './order/confirm/confirm.component';


const routes: Routes = [
  {
    path: 'order/confirm',
    component: ConfirmComponent,
  },
  {
    path: 'order/:id',
    component: OrderComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'profil',
    component: UserComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
