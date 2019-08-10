import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageBodyComponent } from 'src/app/home-page-body/home-page-body.component';


const routes: Routes = [
  { path: '', component: HomePageBodyComponent },
  { path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
