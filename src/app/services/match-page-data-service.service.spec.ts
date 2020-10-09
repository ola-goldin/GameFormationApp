import { TestBed } from '@angular/core/testing';

import { MatchPageDataServiceService } from './match-page-data-service.service';

describe('MatchPageDataServiceService', () => {
  let service: MatchPageDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchPageDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
