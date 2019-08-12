import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageBodyComponent } from 'src/app/home-page-body/home-page-body.component';
import { SendMoneyPageComponent } from 'src/app/send-money-page/send-money-page.component';


const routes: Routes = [
  { path: '', component: HomePageBodyComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'send-money', component: SendMoneyPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
