import { TestBed } from '@angular/core/testing';

import { DropCampaignService } from './drop-campaign-service.service';

describe('DropCampaignService', () => {
  let service: DropCampaignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropCampaignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
