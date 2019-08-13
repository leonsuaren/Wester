import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SenderInf } from './../wester.model';

@Component({
  selector: 'app-send-money-page',
  templateUrl: './send-money-page.component.html',
  styleUrls: ['./send-money-page.component.css']
})
export class SendMoneyPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onContinue(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    const send: SenderInf = {
      name: form.value.reciever,
      sendAmount: form.value.sendAmount
    };
  }

}
