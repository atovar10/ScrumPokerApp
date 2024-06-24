import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpoolLbComponent } from './cardpool-lb.component';

describe('CardpoolLbComponent', () => {
  let component: CardpoolLbComponent;
  let fixture: ComponentFixture<CardpoolLbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardpoolLbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardpoolLbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
