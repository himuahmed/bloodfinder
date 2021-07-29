/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BloodRequestsServiceService } from './blood-RequestsService.service';

describe('Service: BloodRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BloodRequestsServiceService]
    });
  });

  it('should ...', inject([BloodRequestsServiceService], (service: BloodRequestsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
