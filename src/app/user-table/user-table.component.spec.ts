import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USERTABLEComponent } from './user-table.component';

describe('USERTABLEComponent', () => {
  let component: USERTABLEComponent;
  let fixture: ComponentFixture<USERTABLEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [USERTABLEComponent]
    });
    fixture = TestBed.createComponent(USERTABLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
