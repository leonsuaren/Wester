import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../wester.model';
import { ProfileService } from '../profile.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-my-account',
  templateUrl: './edit-my-account.component.html',
  styleUrls: ['./edit-my-account.component.scss']
})
export class EditMyAccountComponent implements OnInit {

  public user: UserInfo[];
  public userId: string;

  constructor(public profileService: ProfileService, public router: ActivatedRoute) { }

  ngOnInit() {
    this.profileService.getUserAvatar();
    this.profileService.getUserAvatarUpdated()
    .subscribe((userData: UserInfo[]) => {
      this.user = userData;
    });
    this.router.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.userId = paramMap.get('id');
      }
    });
  }

  onSave() {

  }

}
