import { TestBed } from '@angular/core/testing';

import { CardLambaadService } from './card-lambaad.service';

describe('CardLambaadService', () => {
  let service: CardLambaadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardLambaadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
