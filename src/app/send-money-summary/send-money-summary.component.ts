import { Component, OnInit } from '@angular/core';
import { WesternService } from 'src/app/western.service';
import { SenderInf } from 'src/app/wester.model';

@Component({
  selector: 'app-send-money-summary',
  templateUrl: './send-money-summary.component.html',
  styleUrls: ['./send-money-summary.component.css']
})
export class SendMoneySummaryComponent implements OnInit {

  send: SenderInf[] = [];

  constructor(public westernService: WesternService) { }

  ngOnInit() {
    this.send = this.westernService.getSender();
  }

}
