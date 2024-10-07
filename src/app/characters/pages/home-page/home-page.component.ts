import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'characters-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  personajes:Character[] = [];

  constructor(private service:CharacterService) {
    service.loadCharacters().subscribe((data) => {
      this.personajes = data
      console.log(this.personajes);
    })
  }

}
