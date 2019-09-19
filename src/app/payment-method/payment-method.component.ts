import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

  public payment = [
    { type: 'Credit Card', bank: 'American Express', cardNumber: '--------5645' },
    { type: 'Debit Card', bank: 'Park National Bank', cardNumber: '--------8741' },
    { type: 'Credit Card', bank: 'Capital One', cardNumber: '--------3952' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
