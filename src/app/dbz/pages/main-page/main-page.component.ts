import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  public characters: Character[] = [];

  public onNewCharacterReceived(newCharacter: Character): void {
    console.log(newCharacter);
    this.characters.push(newCharacter);
  }
}
