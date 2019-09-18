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
  public name: any;
  public lastName: any;
  public number: any;
  public country: any;
  public state: any;

  constructor(public profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUserAvatar();
    this.profileService.getUserAvatarUpdated()
    .subscribe((user: UserInfo[]) => {
      // this.name = user.name;
      console.log(user[0].name);
    });
  }

}
