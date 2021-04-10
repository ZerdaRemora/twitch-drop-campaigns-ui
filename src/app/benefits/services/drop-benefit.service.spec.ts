import { TestBed } from '@angular/core/testing';

import { DropBenefitService } from './drop-benefit.service';

describe('DropBenefitService', () => {
  let service: DropBenefitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropBenefitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
