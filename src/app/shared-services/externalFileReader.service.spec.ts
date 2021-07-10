/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExternalFileReaderService } from './externalFileReader.service';

describe('Service: ExternalFileReader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalFileReaderService]
    });
  });

  it('should ...', inject([ExternalFileReaderService], (service: ExternalFileReaderService) => {
    expect(service).toBeTruthy();
  }));
});
