import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent {
  @Input() control: any;
  @Input() messageError: string = 'Preencha o campo';
  @Input() errorAttribute: string = 'required';
}
