import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpbtnComponent } from './spbtn.component';

describe('SpbtnComponent', () => {
  let component: SpbtnComponent;
  let fixture: ComponentFixture<SpbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpbtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
