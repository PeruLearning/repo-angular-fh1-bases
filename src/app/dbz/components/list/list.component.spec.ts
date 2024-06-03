import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzListComponent } from './list.component';

describe('ListComponent', () => {
  let component: DbzListComponent;
  let fixture: ComponentFixture<DbzListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbzListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DbzListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
