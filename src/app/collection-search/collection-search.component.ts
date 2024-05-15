import { Component } from '@angular/core';
import { MagicService } from '../magic.service';

@Component({
  selector: 'app-collection-search',
  templateUrl: './collection-search.component.html',
})
export class CollectionSearchComponent {
  name: string = '';
  block: string = '';
  results: any[] = [];
  selectedSet: any = {};
  boosterCards: any[] = [];
  filteredCreatureCards: any[] = [];

  constructor(private magicService: MagicService) {}

  search() {
    this.magicService.searchSets(this.name, this.block).subscribe({
      next: (data: any) => {
        console.log('Search Results:', data);
        this.results = data;
      },
      error: (error: any) => {
        console.error('Erro ao pesquisar conjuntos:', error);
      }
    });
  }

  openBooster() {
    if (this.selectedSet && this.selectedSet.code) {
      this.magicService.getBooster(this.selectedSet.code).subscribe({
        next: (data: any) => {
          console.log('Booster Cards:', data.cards);
          this.boosterCards = data.cards;
        },
        error: (error: any) => {
          console.error('Erro ao abrir booster:', error);
        }
      });
    } else {
      console.error('Conjunto inválido:', this.selectedSet);
    }
  }

  setSelectedSet(set: any) {
    this.selectedSet = set;
    this.openBooster(); 
  }

  onFilteredCreatureCards(filteredCards: any[]) {
    this.filteredCreatureCards = filteredCards;
  }
}
