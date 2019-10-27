import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BeneficiaryService } from '../beneficiary.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.scss']
})
export class AddBeneficiaryComponent implements OnInit {

  constructor(private beneficiaryService: BeneficiaryService) { }

  ngOnInit() {
  }

  onAddBeneficiary(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.beneficiaryService.onCreateBeneficiary(
      form.value.name, form.value.lastName, form.value.email, form.value.phoneNumber, form.value.street,
      form.value.city, form.value.zipeCode, form.value.state, form.value.country
    );
  }

}
