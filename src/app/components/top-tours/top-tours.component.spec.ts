import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopToursComponent } from './top-tours.component';

describe('TopToursComponent', () => {
  let component: TopToursComponent;
  let fixture: ComponentFixture<TopToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopToursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
