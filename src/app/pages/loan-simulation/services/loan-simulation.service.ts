import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ResultLoanModel} from "../model/result-loan.model";

@Injectable({
  providedIn: 'root'
})
export class LoanSimulationService {

  constructor() { }

  // Serviço para simular retorno do back-end
  calculateLoan(loanAmount: number, numberPlots: number): Observable<ResultLoanModel> {
    const totalAmountWithInterest: number = loanAmount * 1.05;
    const valuePlots: number = totalAmountWithInterest / numberPlots;
    return of({
      totalAmountWithInterest,
      numberPlots,
      valuePlots,
    });
  }
}
