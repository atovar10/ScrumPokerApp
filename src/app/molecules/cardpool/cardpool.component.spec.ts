import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpoolComponent } from './cardpool.component';

describe('CardpoolComponent', () => {
  let component: CardpoolComponent;
  let fixture: ComponentFixture<CardpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardpoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
