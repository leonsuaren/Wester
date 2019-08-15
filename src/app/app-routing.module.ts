import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageBodyComponent } from 'src/app/home-page-body/home-page-body.component';
import { SendMoneyPageComponent } from 'src/app/send-money-page/send-money-page.component';
import { PickUpPageComponent } from 'src/app/pick-up-page/pick-up-page.component'

const routes: Routes = [
  { path: '', component: HomePageBodyComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'send-money', component: SendMoneyPageComponent },
  { path: 'pick-up-money', component: PickUpPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
