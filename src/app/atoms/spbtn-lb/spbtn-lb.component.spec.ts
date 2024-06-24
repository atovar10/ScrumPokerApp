import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpbtnLbComponent } from './spbtn-lb.component';

describe('SpbtnLbComponent', () => {
  let component: SpbtnLbComponent;
  let fixture: ComponentFixture<SpbtnLbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpbtnLbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpbtnLbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
