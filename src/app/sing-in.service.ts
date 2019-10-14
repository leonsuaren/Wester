import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './wester.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SingInService {

  constructor(public http: HttpClient, public router: Router) { }

  // tslint:disable-next-line:variable-name
  postUsers(_id: string, name: string, lastName: string, phoneNumber: number,
    // tslint:disable-next-line:align
    country: string, state: string, email: string, username: string, password: string, street: string, city: string, zipeCode: number) {
    const user: UserInfo = {
      // tslint:disable-next-line:object-literal-shorthand
     _id: _id, name: name, lastName: lastName, phoneNumber: phoneNumber, country: country,
      // tslint:disable-next-line:object-literal-shorthand
      state: state, email: email, username: username, password: password, street: street, city: city, zipeCode: zipeCode
    };
    this.http.post<{ message: string }>('http://localhost:3000/api/users/signup', user)
    .subscribe((userData) => {
      this.router.navigateByUrl('/');
    });
  }

  logInUser(email: string, password: string) {
    // tslint:disable-next-line:object-literal-shorthand
    const userLogin = { email: email, password: password };
    this.http.post<{ token: string }>('http://localhost:3000/api/users/login', userLogin)
    .subscribe(userLoginInfo => {
      console.log(userLoginInfo);
    });
  }

}
