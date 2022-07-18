import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaSearchComponent } from './pantalla-search.component';

describe('PantallaSearchComponent', () => {
  let component: PantallaSearchComponent;
  let fixture: ComponentFixture<PantallaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
