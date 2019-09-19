import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bills',
  templateUrl: './my-bills.component.html',
  styleUrls: ['./my-bills.component.scss']
})
export class MyBillsComponent implements OnInit {

  public bill = [
    { company: 'Duke Energy', billName: 'Electricity', address: '856 Waycross Rd Apt. B', icon: '<i class="fas fa-bolt"></i>' },
    { company: 'Water', billName: 'Water', address: '856 Waycross Rd Apt. B', icon: '<i class="fas fa-water"></i>' },
    { company: 'CapitalOne', billName: 'Credit Card', address: '', icon: '<i class="fas fa-credit-card"></i>' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
