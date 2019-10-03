import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './wester.model';

@Injectable({
  providedIn: 'root'
})
export class SingInService {

  constructor(public http: HttpClient) { }

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
    this.http.post<{ message: string }>('http://localhost:3000/api/users', user)
    .subscribe((userData) => {
      console.log(userData);
    });
  }

  logInUser() {

  }

}
