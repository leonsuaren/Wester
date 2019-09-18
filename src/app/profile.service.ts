import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UserInfo } from './wester.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private oneUser: any;
  private userUpdated = new Subject<UserInfo[]>();

  constructor(private http: HttpClient) { }

  getUserAvatar() {
    this.http.get<{ message: string, users: UserInfo[] }>('http://localhost:3000/api/users')
    .subscribe((userData) => {
      this.oneUser = userData.users;
      this.userUpdated.next([...this.oneUser]);
    });
  }

  getUserAvatarUpdated() {
    return this.userUpdated.asObservable();
  }


}
