import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 0;

  public increaseBy(value: number = 1) {
    this.counter += value;
  }

  public resetCounter(): void {
    this.counter = 0;
  }
}
