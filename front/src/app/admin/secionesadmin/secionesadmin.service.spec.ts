import { TestBed } from '@angular/core/testing';

import { SecionesadminService } from './secionesadmin.service';

describe('SecionesadminService', () => {
  let service: SecionesadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecionesadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
