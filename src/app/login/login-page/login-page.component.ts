import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  enteredValue = '';
  newPost = 'NO CONTENT';

  onAddPost() {
    this.newPost = this.enteredValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
