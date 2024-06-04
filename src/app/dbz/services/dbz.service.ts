import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  
  public characters: Character[] = [];

  public newCharacterHandler(newCharacter: Character): void {
    newCharacter.id = uuid();
    this.characters.push(newCharacter);
  }

  public removeCharacterHandler(id: string): void {
    this.characters = this.characters.filter(c => c.id !== id);
  }
}
