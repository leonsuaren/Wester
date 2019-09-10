import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './wester.model';

@Injectable({
  providedIn: 'root'
})
export class SingInService {

  constructor(public http: HttpClient) { }

  postUsers(name: string, lastName: string, phoneNumber: number,
    // tslint:disable-next-line:align
    country: string, state: string, email: string, username: string, password: string) {
    const user: UserInfo = {
      // tslint:disable-next-line:object-literal-shorthand
      name: name, lastName: lastName, phoneNumber: phoneNumber, country: country,
      // tslint:disable-next-line:object-literal-shorthand
      state: state, email: email, username: username, password: password
    };
    this.http.post<{ message: string }>('http://localhost:3000/api/users', user)
    .subscribe((userData) => {
      console.log(userData);
    });
  }

}