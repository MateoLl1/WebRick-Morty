import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, SearchResponse } from '../interfaces/character';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiUrl:string  = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  loadCharacters(page?:number){
    return this.http.get<SearchResponse>(`${this.apiUrl}/character/?page=${page || 1}`)
      .pipe(
        map(resp => resp.results),
        catchError( error => of([]))
      );
  }

  searchCharactersByName(term:string){
    return this.http.get(`${this.apiUrl}/character/name=${term}`)
  }
}
