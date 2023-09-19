import { TestBed } from '@angular/core/testing';

import { CycleserviceService } from './cycleservice.service';

describe('CycleserviceService', () => {
  let service: CycleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CycleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
