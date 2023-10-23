import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ResultLoanModel} from "../../model/result-loan.model";

@Component({
  selector: 'app-loan-simulation-finished',
  templateUrl: './loan-simulation-finished.component.html',
  styleUrls: ['./loan-simulation-finished.component.scss']
})
export class LoanSimulationFinishedComponent implements OnInit {

  resumeLoan: ResultLoanModel = new ResultLoanModel();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.resumeLoan = params as ResultLoanModel;
    })
  }

  simulateAgain() {
    this.router.navigate(['']).then();
  }
}
