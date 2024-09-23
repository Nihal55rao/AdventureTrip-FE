import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCardsComponent } from './tour-cards.component';

describe('TourCardsComponent', () => {
  let component: TourCardsComponent;
  let fixture: ComponentFixture<TourCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
