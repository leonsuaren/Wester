import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SingInService } from '../sing-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private singInService: SingInService, private router: Router) { }

  ngOnInit() {
  }

  onLogIn(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.singInService.logInUser(form.value.email, form.value.password);
    this.router.navigateByUrl('/');
  }



}
