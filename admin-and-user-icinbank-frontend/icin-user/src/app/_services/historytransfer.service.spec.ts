import { TestBed } from '@angular/core/testing';

import { HistorytransferService } from './historytransfer.service';

describe('HistorytransferService', () => {
  let service: HistorytransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorytransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
