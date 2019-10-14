import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SingInService } from '../sing-in.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private singInService: SingInService) { }

  ngOnInit() {
  }

  onLogIn(form: NgForm) {

    this.singInService.logInUser(form.value.email, form.value.password);

  }



}
