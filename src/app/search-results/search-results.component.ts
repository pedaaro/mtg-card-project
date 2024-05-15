import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MagicService } from '../magic.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  @Input() results: any[] = [];
  @Output() setSelected = new EventEmitter<any>();
  boosterCards: any[] = [];
  name: string = '';
  block: string = '';

  constructor(private magicService: MagicService, private router: Router, private route: ActivatedRoute) {}

  search() {
    this.magicService.searchSets(this.name, this.block).subscribe({
      next: (data: any) => {
        console.log('Resultado de pesquisa:', data);
        this.results = data;
      }, 
      error: (error: any) => {
        console.error('Erro ao pesquisar conjuntos:', error);
      }
    });
  }

  selectSet(set: any) {
    this.setSelected.emit(set);
    this.magicService.getBooster(set.code).subscribe({
      next: (data: any) => {
        console.log('Booster Cards:', data.cards);
        const shuffledCards = this.shuffle(data.cards);
        this.boosterCards = shuffledCards.slice(0, 16);
      },
      error: (error: any) => {
        console.error('Erro ao obter booster:', error);
      }
    });
  }

  shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  onFilteredCards(filteredCards: any[]) {

    this.boosterCards = filteredCards;
  }
}
