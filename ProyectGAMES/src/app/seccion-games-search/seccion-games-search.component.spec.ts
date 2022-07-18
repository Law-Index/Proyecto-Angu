import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionGamesSearchComponent } from './seccion-games-search.component';

describe('SeccionGamesSearchComponent', () => {
  let component: SeccionGamesSearchComponent;
  let fixture: ComponentFixture<SeccionGamesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionGamesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionGamesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
