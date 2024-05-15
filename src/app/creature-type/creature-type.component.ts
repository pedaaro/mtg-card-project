import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-creature-type',
  templateUrl: './creature-type.component.html',
  styleUrls: ['./creature-type.component.css']
})
export class CreatureTypeComponent {
  @Input() cards: any[] = [];
  @Output() filteredCards = new EventEmitter<any[]>();

  constructor() {}

  ngOnInit() {
    this.filterCreatureCards();
  }

  filterCreatureCards() {
    const creatureCards = this.cards.filter((card) => card.types.includes('creature'));
    this.filteredCards.emit(creatureCards);
  }
}
