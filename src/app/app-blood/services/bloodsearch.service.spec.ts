/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BloodsearchService } from './bloodsearch.service';

describe('Service: Bloodsearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BloodsearchService]
    });
  });

  it('should ...', inject([BloodsearchService], (service: BloodsearchService) => {
    expect(service).toBeTruthy();
  }));
});
