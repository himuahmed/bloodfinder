/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalChatServiceService } from './global-chatService.service';

describe('Service: GlobalChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalChatServiceService]
    });
  });

  it('should ...', inject([GlobalChatServiceService], (service: GlobalChatServiceService) => {
    expect(service).toBeTruthy();
  }));
});
