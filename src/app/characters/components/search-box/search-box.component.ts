import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'characters-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('txtInput')
  txtInput!: ElementRef<HTMLInputElement>;
  @Output()
  txtInputValue = new EventEmitter<string>();

  emitTxtValue() {
    if (!this.txtInput) return;
    this.txtInputValue.emit(this.txtInput.nativeElement.value);
    this.txtInput.nativeElement.value = '';
  }
}
