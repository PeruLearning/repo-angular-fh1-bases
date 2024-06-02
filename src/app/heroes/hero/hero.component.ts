import { Component } from '@angular/core';

@Component({
  selector: 'heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  public nameHasChanged: boolean = false;
  public ageHasChanged: boolean = false;

  public changeName(): void {
    this.name = 'Hulk';
    this.nameHasChanged = true;
  }

  public changeAge(): void {
    this.age = 48;
    this.ageHasChanged = true;
  }

  public resetHero(): void {
    this.name = 'Ironman';
    this.age = 45;
    this.nameHasChanged = false;
    this.ageHasChanged = false;
  }

  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public get heroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
}
