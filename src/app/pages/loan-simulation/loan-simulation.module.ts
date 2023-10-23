import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanSimulationFormComponent } from './components/loan-simulation-form/loan-simulation-form.component';
import {LoanSimulationRoutingModule} from "./loan-simulation-routing.module";
import {CardModule} from "primeng/card";
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {AutoCompleteModule} from "primeng/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import { LoanSimulationResultComponent } from './components/loan-simulation-result/loan-simulation-result.component';
import {ErrorMessageModule} from "../../shared/components/error-message/error-message.module";
import {StepsModule} from "primeng/steps";
import { LoanSimulationComponent } from './components/loan-simulation/loan-simulation.component';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { LoanSimulationFinishedComponent } from './components/loan-simulation-finished/loan-simulation-finished.component';


@NgModule({
  declarations: [
    LoanSimulationFormComponent,
    LoanSimulationResultComponent,
    LoanSimulationComponent,
    LoanSimulationFinishedComponent,
  ],
    imports: [
        CommonModule,
        LoanSimulationRoutingModule,
        CardModule,
        InputNumberModule,
        DropdownModule,
        ButtonModule,
        InputTextModule,
        AutoCompleteModule,
        ReactiveFormsModule,
        ToastModule,
        ErrorMessageModule,
        StepsModule,
        ConfirmDialogModule,
    ]
})
export class LoanSimulationModule { }
