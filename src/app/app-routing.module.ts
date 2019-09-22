import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageBodyComponent } from 'src/app/home-page-body/home-page-body.component';
import { SendMoneyPageComponent } from 'src/app/send-money-page/send-money-page.component';
import { PickUpPageComponent } from 'src/app/pick-up-page/pick-up-page.component';
import { TrackTransferPageComponent } from 'src/app/track-transfer-page/track-transfer-page.component';
import { PayBillsComponent } from './pay-bills/pay-bills.component';
import { FindLocationComponent } from './find-location/find-location.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyBeneficiaryComponent } from './my-beneficiary/my-beneficiary.component';
import { MyBillsComponent } from './my-bills/my-bills.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { EditPersonalInformationComponent } from './edit-personal-information/edit-personal-information.component';

const routes: Routes = [
  { path: '', component: HomePageBodyComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'send-money', component: SendMoneyPageComponent },
  { path: 'pick-up-money', component: PickUpPageComponent },
  { path: 'track-transfer', component: TrackTransferPageComponent },
  { path: 'pay-bills', component: PayBillsComponent },
  { path: 'find-locations', component: FindLocationComponent },
  { path: 'signin', component: SignInPageComponent },
  { path: 'profile', component: ProfileComponent,
  children: [
    { path: 'personalInformation', component: PersonalInformationComponent },
    { path: 'edit/:id', component: EditPersonalInformationComponent },
    { path: 'myAccount', component: MyAccountComponent },
    { path: 'myBeneficiaries', component: MyBeneficiaryComponent },
    { path: 'myBills', component: MyBillsComponent },
    { path: 'paymentMethod', component: PaymentMethodComponent },
    { path: 'notifications', component: NotificationsComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
