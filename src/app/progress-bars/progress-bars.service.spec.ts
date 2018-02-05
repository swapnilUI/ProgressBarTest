import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { ProgressBarsService } from './progress-bars.service';

describe('ProgressBarsService', () => {
  let service:ProgressBarsService;
  let httpMock:HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],   
      providers: [ProgressBarsService]     
    });

    service = TestBed.get(ProgressBarsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(()=>{
      httpMock.verify();
  });

  it('should get data', () =>{
      const dummyData = {"buttons":[27,40,-29,-39],"bars":[81,23,81,38],"limit":190};

      service.getDefaults().subscribe(data => {
          expect(data).toEqual(dummyData);
      });

      const request = httpMock.expectOne("https://pb-api.herokuapp.com/bars");

      expect(request.request.method).toBe("GET");

      request.flush(dummyData);
  });

});
