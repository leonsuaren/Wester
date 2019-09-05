import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SenderInf } from './../wester.model';
import { WesternService } from 'src/app/western.service';

@Component({
  selector: 'app-send-money-page',
  templateUrl: './send-money-page.component.html',
  styleUrls: ['./send-money-page.component.scss']
})
export class SendMoneyPageComponent implements OnInit {

  constructor(public westernService: WesternService) { }

  ngOnInit() {
  }

  onContinue(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.westernService.addSender(form.value.reciever, form.value.sendAmount);
    form.resetForm();
  }

}
