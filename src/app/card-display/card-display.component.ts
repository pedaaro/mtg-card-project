import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
})
export class CardDisplayComponent {
  @Input() cards: any[] = [];

  constructor() { }
}
