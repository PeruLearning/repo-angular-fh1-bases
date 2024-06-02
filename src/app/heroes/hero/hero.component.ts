import { Component } from '@angular/core';

@Component({
  selector: 'heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  public changeName(): void {
    this.name = 'Hulk';
  }

  public changeAge(): void {
    this.age = 48;
  }

  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public get heroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
}
