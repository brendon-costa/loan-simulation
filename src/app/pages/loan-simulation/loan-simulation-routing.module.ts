import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoanSimulationComponent} from "./components/loan-simulation/loan-simulation.component";
import {
  LoanSimulationFinishedComponent
} from "./components/loan-simulation-finished/loan-simulation-finished.component";

const routes: Routes = [
  {path: '', component: LoanSimulationComponent},
  {path: 'finished', component: LoanSimulationFinishedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanSimulationRoutingModule { }
