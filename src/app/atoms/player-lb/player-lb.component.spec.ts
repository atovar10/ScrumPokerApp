import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLbComponent } from './player-lb.component';

describe('PlayerLbComponent', () => {
  let component: PlayerLbComponent;
  let fixture: ComponentFixture<PlayerLbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerLbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerLbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
