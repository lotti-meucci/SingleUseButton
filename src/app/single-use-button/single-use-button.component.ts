import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-use-button',
  templateUrl: './single-use-button.component.html',
  styleUrls: ['./single-use-button.component.css']
})
export class SingleUseButtonComponent {
  @Input() content = "";
  @Input() onClickDisable = false;
  clicked = false;

  onClick(): void {
    this.clicked = this.onClickDisable;
  }
}
