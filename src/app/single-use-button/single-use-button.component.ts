import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-use-button',
  templateUrl: './single-use-button.component.html',
  styleUrls: ['./single-use-button.component.css']
})
export class SingleUseButtonComponent {
  @Input() content = "";
  @Input() onClickDisable = false;
  @Output() click = new EventEmitter();
  isDisabled = false;

  onClick(): void {
    this.isDisabled = this.onClickDisable;
    this.click.emit();
  }
}
