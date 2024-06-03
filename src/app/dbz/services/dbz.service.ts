import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
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