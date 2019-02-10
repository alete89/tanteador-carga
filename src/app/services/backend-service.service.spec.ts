/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BackendServiceService } from './backend-service.service';
import { HttpModule } from '@angular/http';

describe('Service: BackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [BackendServiceService]
    });
  });

  it('should ...', inject([BackendServiceService], (service: BackendServiceService) => {
    expect(service).toBeTruthy();
  }));
});
