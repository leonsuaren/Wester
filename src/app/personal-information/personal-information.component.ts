import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserInfo } from '../wester.model';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  public user: UserInfo[] = [];

  constructor(public profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUserAvatar();
    this.profileService.getUserAvatarUpdated()
    .subscribe((user: UserInfo[]) => {
      this.user = user;
    });
  }

}
