import { Component } from '@angular/core';
import { MagicService } from './magic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedSet: [] = [];
  creatureCards: any[] = []; // Variável para armazenar as cartas do tipo "creature"

  constructor(private magicService: MagicService) {}

  selectSet(set: any) {
    this.selectedSet = set;
    this.getCards(set.id);
  }

  getCards(setId: string) {
    this.creatureCards = [];
    this.fetchCards(setId);
  }

  fetchCards(setId: string) {
    this.magicService.getBooster(setId).subscribe((response: any) => {
      const boosterCards = response;

      // Se tiver menos de 30 cartas do tipo "creature", procurar por mais cartas
      if (this.creatureCards.length < 30) {
        this.creatureCards.push(...boosterCards.filter((card: any) => card.types.includes('creature')));
        this.fetchCards(setId);
      }
    });
  }

  onCreatureCardsReady(cards: any[]) {
    this.creatureCards = cards;
  }
}
