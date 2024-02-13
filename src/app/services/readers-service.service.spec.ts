import { TestBed } from '@angular/core/testing';

import { ReadersServiceService } from './readers-service.service';

describe('ReadersServiceService', () => {
  let service: ReadersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
