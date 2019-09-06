import { Component, OnInit } from '@angular/core';
import { WesternService } from 'src/app/western.service';
import { SenderInf } from 'src/app/wester.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-send-money-summary',
  templateUrl: './send-money-summary.component.html',
  styleUrls: ['./send-money-summary.component.scss']
})
export class SendMoneySummaryComponent implements OnInit {

  public sender: SenderInf[] = [];
  private senderSub: Subscription;

  constructor(public westernService: WesternService) {
    this.westernService.getSender();
    this.senderSub = this.westernService.getSenderUpdated()
    .subscribe((sender: SenderInf[]) => {
      this.sender = sender;
    });
    console.log(this.sender);
  }

  ngOnInit() {
  }

}
