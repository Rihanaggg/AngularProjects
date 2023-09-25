import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNoticesComponent } from './list-notices.component';

describe('ListNoticesComponent', () => {
  let component: ListNoticesComponent;
  let fixture: ComponentFixture<ListNoticesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListNoticesComponent]
    });
    fixture = TestBed.createComponent(ListNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
