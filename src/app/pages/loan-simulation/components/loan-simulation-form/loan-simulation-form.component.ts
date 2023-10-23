import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {markControlsAsDirty} from "../../../../shared/utils/form/markControlsAsDirty";

@Component({
  selector: 'app-loan-simulation-form',
  templateUrl: './loan-simulation-form.component.html',
  styleUrls: ['./loan-simulation-form.component.scss']
})
export class LoanSimulationFormComponent {

  @Output() simulate: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup = this.fb.group({
    name: this.fb.control<string>('', [Validators.required]),
    loanAmount: this.fb.control<number|null>(null, [Validators.required, Validators.min(1)]),
    numberPlots: this.fb.control<number|null>(null, [
      Validators.required, Validators.min(1), Validators.max(360)
    ]),
  });
  plots: number[] = Array.from({length: 360}, (v, i) => i + 1);
  suggestions: number[] = [];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
  ) {  }

  filterPlots(event: any) {
    let query = event.query;
    this.suggestions = this.plots.filter(n => n.toString().startsWith(query));
  }

  simulateHandle(form: FormGroup) {
    markControlsAsDirty(form.controls);
    if (form.valid) {
      this.simulate.emit(form.value);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Existem campos obrigatórios não preenchidos e/ou inválidos.'
      })
    }
  }
}
