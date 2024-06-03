import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  public newCharacter: Character = {
    id: 0,
    name: '',
    power: 0
  };

  public emitCharacter(): void {
    if (this.newCharacter.name.length === 0) return;

    this.newCharacter.id = this.getRandomInt(1, 999999);
    debugger;
    this.onNewCharacterEmmiter.emit(this.newCharacter);
    
    this.newCharacter = {
      id: 0,
      name: '',
      power: 0
    };
  }

  @Output()
  public onNewCharacterEmmiter: EventEmitter<Character> = new EventEmitter();

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
