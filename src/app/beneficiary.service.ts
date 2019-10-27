import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeneficiaryModel } from './beneficiary.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(private http: HttpClient, private router: Router) { }

  onCreateBeneficiary(
    name: string, lastName: string, email: string, phoneNumber: number, street: string, city: string,
    zipeCode: number, state: string, country: string
  ) {
    const beneficiary: BeneficiaryModel = {
      // tslint:disable-next-line:object-literal-shorthand
      name: name, lastName: lastName, email: email, phoneNumber: phoneNumber, street: street, city: city,
      // tslint:disable-next-line:object-literal-shorthand
      zipeCode: zipeCode, state: state, country: country
    };
    this.http.post<{ result: []}>('http://localhost:3000/api/beneficiary', beneficiary)
    .subscribe(result => {
      this.router.navigateByUrl('/profile/myBeneficiaries');
    })
  }

}
