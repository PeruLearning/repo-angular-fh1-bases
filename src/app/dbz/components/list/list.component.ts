import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class DbzListComponent {
  @Input({ alias: 'list', required: true })
  public characters: Character[] = [];

  @Output()
  public onRemoveEmitter: EventEmitter<number> = new EventEmitter();

  public removeCharacter(index: number): void {
    debugger;
    this.onRemoveEmitter.emit(index);
  }
}
