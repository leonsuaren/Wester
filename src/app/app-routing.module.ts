import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageBodyComponent } from 'src/app/home-page-body/home-page-body.component';
import { SendMoneyPageComponent } from 'src/app/send-money-page/send-money-page.component';
import { PickUpPageComponent } from 'src/app/pick-up-page/pick-up-page.component';
import { TrackTransferPageComponent } from 'src/app/track-transfer-page/track-transfer-page.component';
import { PayBillsComponent } from './pay-bills/pay-bills.component';
import { FindLocationComponent } from './find-location/find-location.component';

const routes: Routes = [
  { path: '', component: HomePageBodyComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'send-money', component: SendMoneyPageComponent },
  { path: 'pick-up-money', component: PickUpPageComponent },
  { path: 'track-transfer', component: TrackTransferPageComponent },
  { path: 'pay-bills', component: PayBillsComponent },
  { path: 'find-locations', component: FindLocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
