import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'characters-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  personajes: Character[] = [];

  constructor(private service: CharacterService) {
    service.loadCharacters();
  }

  get loadHistoryCharacters() {
    return this.service.historyChacters;
  }

  get loadCharacters() {
    return this.service.listCharacters;
  }

  searchCharacterbyName(value: string) {
    if (value.trim().length === 0) return;
    this.service.searchCharactersByName(value);
  }
}
