import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {LoanSimulationService} from "../../services/loan-simulation.service";
import {ResultLoanModel} from "../../model/result-loan.model";

@Component({
  selector: 'app-loan-simulation',
  templateUrl: './loan-simulation.component.html',
  styleUrls: ['./loan-simulation.component.scss']
})
export class LoanSimulationComponent {
  activeIndexStep: number = 0;
  resumeLoan: ResultLoanModel = new ResultLoanModel();
  items: MenuItem[] = [
    {
      label: 'Simular Empréstimo',
    },
    {
      label: 'Confirmação',
    },
  ];

  constructor(
    private loanSimulationService: LoanSimulationService
  ) {
  }

  nextStep() {
    this.activeIndexStep = this.activeIndexStep + 1;
  }

  previousStep() {
    this.activeIndexStep = this.activeIndexStep - 1;
  }

  simulate(formValue: any) {
    this.nextStep();
    this.calculateLoan(formValue);
  }

  calculateLoan(formValue: any) {
    this.loanSimulationService.calculateLoan(
      formValue.loanAmount, Number(formValue.numberPlots)
    ).subscribe(response => {
      this.resumeLoan = response;
    })
  }
}
