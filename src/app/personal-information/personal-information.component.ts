import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserInfo } from '../wester.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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
  private userId: string;

  constructor(public profileService: ProfileService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.profileService.getUserAvatar();
    this.profileService.getUserAvatarUpdated()
    .subscribe((user: UserInfo[]) => {
      this.user = user;
    });
  }

}
