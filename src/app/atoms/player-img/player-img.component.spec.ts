import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerImgComponent } from './player-img.component';

describe('PlayerImgComponent', () => {
  let component: PlayerImgComponent;
  let fixture: ComponentFixture<PlayerImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
