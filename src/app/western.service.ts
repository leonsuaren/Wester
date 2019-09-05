import { Injectable } from '@angular/core';

import { SenderInf } from './wester.model';

@Injectable({
  providedIn: 'root'
})
export class WesternService {
  private sender: SenderInf[] = [];

  getSender() {
    return [...this.sender];
  }

  addSender(reciever: string, sendAmount: number) {
    const send: SenderInf = { reciever, sendAmount };
    this.sender.push(send);
    console.log(this.sender);
  }

}
