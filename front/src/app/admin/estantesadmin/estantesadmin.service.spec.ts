import { TestBed } from '@angular/core/testing';

import { EstantesadminService } from './estantesadmin.service';

describe('EstantesadminService', () => {
  let service: EstantesadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstantesadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
