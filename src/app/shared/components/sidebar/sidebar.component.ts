import { Component } from '@angular/core';
import { CharacterService } from '../../../characters/services/character.service';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private service: CharacterService) { }

  get getHistory() {
    return this.service.historyChacters;
  }

  clickHistory(term: string) {
    this.service.searchCharactersByName(term)
  }

}

