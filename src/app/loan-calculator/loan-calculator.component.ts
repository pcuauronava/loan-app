import { Component, OnInit } from '@angular/core';
import { LoanCalculatorService } from '../loan-calculator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.scss']
})
export class LoanCalculatorComponent implements OnInit {
  // loanData = loanData;
  loanData: FormGroup;
  // setting the form group
  payment: number = 0;
  interest: number = 0;
  // years: number = 0;
  // reset the values to 0
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.loanData = this.fb.group({
      amount: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'),]),],
      interest: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'),])],
      years: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'),],),],
    });
  }

get form() {
  return this.loanData.controls;
}

  calculateResults() {
    let formValues = this.loanData.value;
    let amount = parseFloat(formValues.amount);
    let interest = parseFloat(formValues.interest);
    let years = parseFloat(formValues.years);

    let months = (years * 12);
    let ratePerPeriod = (interest / 100) / 12;

    this.payment = (amount * ratePerPeriod) / (1 - Math.pow(1 + ratePerPeriod, -months));
    this.interest = (this.payment * months) - amount;
  }
  clearForm() {
    this.payment = 0;
    this.interest = 0;
    this.loanData.reset();
  }
}
