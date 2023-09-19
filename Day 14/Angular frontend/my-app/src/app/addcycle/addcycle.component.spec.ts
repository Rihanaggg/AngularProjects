import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcycleComponent } from './addcycle.component';

describe('AddcycleComponent', () => {
  let component: AddcycleComponent;
  let fixture: ComponentFixture<AddcycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcycleComponent]
    });
    fixture = TestBed.createComponent(AddcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
