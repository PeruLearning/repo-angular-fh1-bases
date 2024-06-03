import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class DbzListComponent {
  @Input({ alias: 'list', required: true })
  public characters: Character[] = [];
}
