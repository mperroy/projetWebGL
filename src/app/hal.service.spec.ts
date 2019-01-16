import { TestBed } from '@angular/core/testing';

import { HalService } from './hal.service';

describe('HalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HalService = TestBed.get(HalService);
    expect(service).toBeTruthy();
  });
});
