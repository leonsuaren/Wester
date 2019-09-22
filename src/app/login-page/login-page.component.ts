import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  onLogIn(form: NgForm) {
    console.log(form.value);
    form.resetForm();
  }

  constructor() { }

  ngOnInit() {
  }

}
