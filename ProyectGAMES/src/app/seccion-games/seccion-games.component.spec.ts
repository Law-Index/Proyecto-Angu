import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionGamesComponent } from './seccion-games.component';

describe('SeccionGamesComponent', () => {
  let component: SeccionGamesComponent;
  let fixture: ComponentFixture<SeccionGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
