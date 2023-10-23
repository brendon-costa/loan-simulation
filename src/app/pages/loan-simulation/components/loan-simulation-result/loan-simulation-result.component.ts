import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {ConfirmationService} from "primeng/api";
import {ResultLoanModel} from "../../model/result-loan.model";

@Component({
  selector: 'app-loan-simulation-result',
  templateUrl: './loan-simulation-result.component.html',
  styleUrls: ['./loan-simulation-result.component.scss']
})
export class LoanSimulationResultComponent {
  @Input() resumeLoan: ResultLoanModel = new ResultLoanModel();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    protected confirmationService: ConfirmationService,
    private router: Router,
  ) {  }

  cancelHandle() {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja cancelar o emprestimo?',
      header: 'Confirmação',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'accept-button-style-class',
      accept: () => {
        this.cancel.emit();
      }
    });
  }

  confirmation() {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja confirmar o emprestimo?',
      header: 'Confirmação',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'accept-button-style-class',
      accept: () => {
        this.router.navigate(['finished'], {queryParams: this.resumeLoan}).then();
      }
    });
  }
}
