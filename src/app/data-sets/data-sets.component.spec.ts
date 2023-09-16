import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSetsComponent } from './data-sets.component';

describe('DataSetsComponent', () => {
  let component: DataSetsComponent;
  let fixture: ComponentFixture<DataSetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSetsComponent]
    });
    fixture = TestBed.createComponent(DataSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
