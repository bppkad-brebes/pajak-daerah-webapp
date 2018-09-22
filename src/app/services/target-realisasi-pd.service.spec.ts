import { TestBed } from '@angular/core/testing';

import { TargetRealisasiPdService } from './target-realisasi-pd.service';

describe('TargetRealisasiPdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TargetRealisasiPdService = TestBed.get(TargetRealisasiPdService);
    expect(service).toBeTruthy();
  });
});
