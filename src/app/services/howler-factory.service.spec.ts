import { TestBed } from '@angular/core/testing';

import { HowlerFactoryService } from './howler-factory.service';

describe('HowlerFactoryService', () => {
  let service: HowlerFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HowlerFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
