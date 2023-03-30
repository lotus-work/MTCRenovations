import { TestBed } from '@angular/core/testing';

import { GetAQuoteService } from './get-a-quote.service';

describe('GetAQuoteService', () => {
  let service: GetAQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
