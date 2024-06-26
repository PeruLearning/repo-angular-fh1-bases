import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  
  public characters: Character[] = [];

  public addCharacter(newCharacter: Character): void {
    this.characters.push({ ...newCharacter, id: uuid() });
  }

  public removeCharacterBydId(id: string): void {
    this.characters = this.characters.filter(c => c.id !== id);
  }
}
