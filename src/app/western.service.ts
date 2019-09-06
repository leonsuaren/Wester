import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { SenderInf } from './wester.model';

@Injectable({
  providedIn: 'root'
})
export class WesternService {
  private sender: SenderInf[] = [];
  private senderUpdated = new Subject<SenderInf[]>();

  constructor(private http: HttpClient) {}

  getSender() {
    this.http.get<{ message: string, sender: SenderInf[] }>('http://localhost:3000/api/sender')
    .subscribe((senderData) => {
      this.sender = senderData.sender;
      this.senderUpdated.next([...this.sender]);
      console.log(senderData.message);
    });
  }

  getSenderUpdated() {
    return this.senderUpdated.asObservable();
  }

  addSender(reciever: string, sendAmount: number) {
    const send: SenderInf = { reciever, sendAmount };
    this.sender.push(send);
    console.log(this.sender);
  }

}
