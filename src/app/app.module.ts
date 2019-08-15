import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { MatInputModule, MatCardModule, MatButtonModule, MatRadioModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuComponent } from './menu/menu.component';
import { HomePageBodyComponent } from './home-page-body/home-page-body.component';
import { FooterComponent } from './footer/footer.component';
import { SendMoneyPageComponent } from './send-money-page/send-money-page.component';
import { PickUpPageComponent } from './pick-up-page/pick-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MenuComponent,
    HomePageBodyComponent,
    FooterComponent,
    SendMoneyPageComponent,
    PickUpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
