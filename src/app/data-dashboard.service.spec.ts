import { TestBed, inject } from '@angular/core/testing';

import { DataDashboardService } from './data-dashboard.service';

describe('DataDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataDashboardService]
    });
  });

  it('should be created', inject([DataDashboardService], (service: DataDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
