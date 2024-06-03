import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  public characters: Character[] = [];

  public newCharacterHandler(newCharacter: Character): void {
    debugger;
    this.characters.push(newCharacter);
  }

  public removeCharacterHandler(id: number): void {
    debugger;
    this.characters = this.characters.filter(c => c.id !== id);
  }
}
