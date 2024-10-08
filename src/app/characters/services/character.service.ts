import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, SearchResponse } from '../interfaces/character';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  apiUrl: string = 'https://rickandmortyapi.com/api';

  historyChacters: string[] = [];

  listCharacters: Character[] = [];

  constructor(private http: HttpClient) { }

  loadCharacters(page?: number) {
    return this.http
      .get<SearchResponse>(`${this.apiUrl}/character/?page=${page || 1}`)
      .pipe(
        map((resp) => resp.results),
        catchError(() => of([]))
      ).subscribe(data => this.listCharacters = data);
  }

  searchCharactersByName(term: string) {
    this.saveHistory(term);
    return this.http
      .get<SearchResponse>(`${this.apiUrl}/character/?name=${term}`)
      .pipe(
        map((resp) => resp.results),
        catchError((err) => of([]))
      ).subscribe((data) => this.listCharacters = data);
  }

  saveHistory(term: string) {
    if (term.trim().length === 0) return;
    this.historyChacters.push(term.toLowerCase());
    console.log(this.historyChacters);
  }
}
