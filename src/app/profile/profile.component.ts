import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserInfo } from '../wester.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public profileService: ProfileService) { }

  public user: UserInfo[] = [];

  ngOnInit() {

    this.profileService.getUserAvatar();
    this.profileService.getUserAvatarUpdated()
    .subscribe((userData: UserInfo[]) => {
      this.user = userData;
    });
  }

}
