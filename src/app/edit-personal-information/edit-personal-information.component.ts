import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../wester.model';
import { ProfileService } from '../profile.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-personal-information',
  templateUrl: './edit-personal-information.component.html',
  styleUrls: ['./edit-personal-information.component.scss']
})
export class EditPersonalInformationComponent implements OnInit {

  public user: UserInfo[] = [];

  constructor(public profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUserAvatar();
    this.profileService.getUserAvatarUpdated()
    .subscribe((userData: UserInfo[]) => {
      this.user = userData;
    });

  }

  onSave(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.profileService.updateUser(form.value._id, form.value.name, form.value.lastName,
        form.value.phoneNumber, form.value.country, form.value.state, form.value.email, form.value.username, form.value.password
        );
      console.dir(form.value);
    }
  }

}
