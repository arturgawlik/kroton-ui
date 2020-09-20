import { TestBed } from '@angular/core/testing';

import { NotyficationsService } from './notyfications.service';

describe('NotyficationsService', () => {
  let service: NotyficationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotyficationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
