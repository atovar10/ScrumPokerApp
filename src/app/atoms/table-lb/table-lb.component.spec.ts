import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLbComponent } from './table-lb.component';

describe('TableLbComponent', () => {
  let component: TableLbComponent;
  let fixture: ComponentFixture<TableLbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableLbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableLbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
