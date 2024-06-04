import { Component } from '@angular/core';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(public dbzService: DbzService) {
 
  }
}
