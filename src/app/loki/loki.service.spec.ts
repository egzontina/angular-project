import { TestBed, inject } from '@angular/core/testing';

import { LokiService } from './loki.service';

describe('LokiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LokiService]
    });
  });

  it('should be created', inject([LokiService], (service: LokiService) => {
    expect(service).toBeTruthy();
  }));
});
