import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../wester.model';
import { ProfileService } from '../profile.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-personal-information',
  templateUrl: './edit-personal-information.component.html',
  styleUrls: ['./edit-personal-information.component.scss']
})
export class EditPersonalInformationComponent implements OnInit {

  public user: UserInfo[] = [];
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

  onSave(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.profileService.updateUser(this.userId, form.value.name, form.value.lastName,
        form.value.phoneNumber, form.value.country, form.value.state, form.value.email, form.value.username, form.value.password
        );
      }
  }

}
