import { Component, Input } from '@angular/core';
import { Status } from '../../../characters/interfaces/character';

@Component({
  selector: 'shared-span',
  templateUrl: './custom-span.component.html',
})
export class CustomSpanComponent {

  @Input()
  status:Status = Status.Unknown

  statusEnum = Status;

}
