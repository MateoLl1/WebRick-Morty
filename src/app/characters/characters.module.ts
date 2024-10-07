import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardComponent,
    CharacterPageComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
],
  exports:[
    HomePageComponent
  ]
})
export class CharactersModule { }
