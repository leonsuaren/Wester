import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { MatInputModule, MatCardModule, MatButtonModule, MatRadioModule, MatFormFieldModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuComponent } from './menu/menu.component';
import { HomePageBodyComponent } from './home-page-body/home-page-body.component';
import { FooterComponent } from './footer/footer.component';
import { SendMoneyPageComponent } from './send-money-page/send-money-page.component';
import { PickUpPageComponent } from './pick-up-page/pick-up-page.component';
import { TrackTransferPageComponent } from './track-transfer-page/track-transfer-page.component';
import { SendMoneySummaryComponent } from './send-money-summary/send-money-summary.component';
import { WesternService } from 'src/app/western.service';
import { PayBillsComponent } from './pay-bills/pay-bills.component';
import { FindLocationComponent } from './find-location/find-location.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyBeneficiaryComponent } from './my-beneficiary/my-beneficiary.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MyBillsComponent } from './my-bills/my-bills.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MenuComponent,
    HomePageBodyComponent,
    FooterComponent,
    SendMoneyPageComponent,
    PickUpPageComponent,
    TrackTransferPageComponent,
    SendMoneySummaryComponent,
    PayBillsComponent,
    FindLocationComponent,
    SignInPageComponent,
    ProfileComponent,
    PersonalInformationComponent,
    MyAccountComponent,
    MyBeneficiaryComponent,
    PaymentMethodComponent,
    NotificationsComponent,
    MyBillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  providers: [WesternService],
  bootstrap: [AppComponent]
})
export class AppModule { }
