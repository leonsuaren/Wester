import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SingInService } from '../sing-in.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  constructor(public singinService: SingInService) { }

  ngOnInit() {
  }

  onSingIn(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.singinService.postUsers(
      form.value._id,
      form.value.name,
      form.value.lastName,
      form.value.phoneNumber,
      form.value.country,
      form.value.state,
      form.value.email,
      form.value.username,
      form.value.password,
      form.value.street,
      form.value.city,
      form.value.zipeCode
    );
    form.resetForm();
  }

}
