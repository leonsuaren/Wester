import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-beneficiary',
  templateUrl: './my-beneficiary.component.html',
  styleUrls: ['./my-beneficiary.component.scss']
})
export class MyBeneficiaryComponent implements OnInit {


  public beneficiary = [
    { name: 'Nena Suarez', country: 'USA'},
    { name: 'Esperanza Nieto', country: 'Mexico' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
