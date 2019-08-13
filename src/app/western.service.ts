import { Injectable } from '@angular/core';

import { SenderInf } from './wester.model';

@Injectable({
  providedIn: 'root'
})
export class WesternService {
  private send: SenderInf [] = [];

  getSender( ) {
    return [...this.send];
  }

  addSender(name: string, sendAmount: number) {
    const send: SenderInf = { name, sendAmount };
  }

}
