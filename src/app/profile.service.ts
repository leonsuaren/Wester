import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UserInfo } from './wester.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private oneUser: UserInfo[] = [];
  private userUpdated = new Subject<UserInfo[]>();

  constructor(private http: HttpClient) { }

  getUserAvatar() {
    this.http.get<{ message: string, users: any }>('http://localhost:3000/api/users')
    .subscribe((userData) => {
      this.oneUser = userData.users;
      this.userUpdated.next([...this.oneUser]);
    });
  }

  getUserAvatarUpdated() {
    return this.userUpdated.asObservable();
  }

  // tslint:disable-next-line:variable-name
  updateUser(_id: string, name: string, lastName: string, phoneNumber: number, country: string,
    // tslint:disable-next-line:align
    state: string, email: string, username: string, password: string, street: string, city: string, zipeCode: number) {
    // tslint:disable-next-line:object-literal-shorthand
    const user: UserInfo =  {_id: _id, name: name, lastName: lastName, phoneNumber: phoneNumber,
      // tslint:disable-next-line:object-literal-shorthand
      country: country, state: state, email: email, username: username, password: password, street: street, city: city, zipeCode: zipeCode
    };
    this.http.put<{ message: string, user: UserInfo[] }>('http://localhost:3000/api/users/' + _id, user)
    .subscribe(response => console.log(response.message));
  }

}
