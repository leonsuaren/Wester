import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../wester.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit-personal-information',
  templateUrl: './edit-personal-information.component.html',
  styleUrls: ['./edit-personal-information.component.scss']
})
export class EditPersonalInformationComponent implements OnInit {

  public user: UserInfo[] = []

  constructor(public profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUserAvatar();
    this.profileService.getUserAvatarUpdated()
    .subscribe((userData: UserInfo[]) => {
      this.user = userData;
    });

  }

  onSave() {

  }

}
