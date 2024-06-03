import { Component } from '@angular/core';

@Component({
  selector: 'heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class HeroesListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string = undefined;

  public removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
