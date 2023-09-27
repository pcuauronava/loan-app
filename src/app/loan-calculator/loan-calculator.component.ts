import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoanCalculatorService } from '../loan-calculator.service';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.scss']
})
export class LoanCalculatorComponent implements OnInit {
  log(x: any){
    console.log(x);
  }
  loanData: FormGroup = new FormGroup({});
  // setting the form group
  interestResult: number = 0;
  payment: number = 0;
  interest: number = 0;
  // numberOfPayments: number = 0;
  // reset the values to 0
  constructor(private fb: FormBuilder) {
    console.log(this.loanData);
  }
  ngOnInit(): void {
    this.loanData = this.fb.group({
      principal: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'),]),],
      interest: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'),])],
      numberOfPayments: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$'),],),],
    });
  }

get form() {
  return this.loanData.controls;
}
onSubmit() {
  const formValues = this.loanData.value;
  //this is how we capture the values of the form
  const principal = parseInt(formValues.principal);
  const interest = parseInt(formValues.interest);
  const numberOfPayments = parseInt(formValues.numberOfPayments);

    }
 

calculateResults() {
  if (this.loanData) {
    let formValues = this.loanData.value;
    let principal = parseFloat(formValues.principal);
    let interest = parseFloat(formValues.interest);
    let numberOfPayments = parseFloat(formValues.numberOfPayments);

    let months = (numberOfPayments * 12);
    let ratePerPeriod = (interest / 100) / 12;

    this.payment = (principal * ratePerPeriod) / (1 - Math.pow(1 + ratePerPeriod, -months));
    this.interestResult = (this.payment * months) - principal;
  }
}
clearForm() {
  this.payment = 0;
  this.interest = 0;
  if (this.loanData) {
    this.loanData.reset();
  }
}
}
