import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) { }
  
  public get characters(): Character[] {
    return [ ... this.dbzService.characters ];
  }

  public onNewCharacter(newCharacter: Character): void {
    this.dbzService.addCharacter(newCharacter);
  }

  public onRemoveCharacter(id: string): void {
    this.dbzService.removeCharacterBydId(id);
  }
}
