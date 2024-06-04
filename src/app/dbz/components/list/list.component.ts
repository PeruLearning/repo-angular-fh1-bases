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
  public onRemove: EventEmitter<string> = new EventEmitter();

  public onRemoveCharacter(index: string): void {
    this.onRemove.emit(index);
  }
}
