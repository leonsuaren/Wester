import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserInfo } from '../wester.model';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  constructor(public profileService: ProfileService) { }

  public user: UserInfo[] = [];

  ngOnInit() {

    this.profileService.getUserAvatar();
    this.profileService.getUserAvatarUpdated()
    .subscribe((user: UserInfo[]) => {
      this.user = user;
      console.log(user);
    });

  }

}
