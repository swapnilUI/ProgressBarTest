import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProgressBarsComponent } from './progress-bars.component';
import {ProgressBarsService} from './progress-bars.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ProgressBarsComponent', () => {
  let component: ProgressBarsComponent;
  let fixture: ComponentFixture<ProgressBarsComponent>;
  let service:ProgressBarsService;
  let httpMock:HttpTestingController;
  const dummyData = {"buttons":[27,40,-29,-39],"bars":[81,23,81,38],"limit":190};
  const dummyEvent = {"target":{
        "attributes":{
          "data-val":{
             "nodeValue" : 10
          }
        }
      }};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarsComponent],
      imports:[FormsModule,HttpClientTestingModule],
      providers:[ProgressBarsService]
    })
    .compileComponents();
    service = TestBed.get(ProgressBarsService);
    httpMock = TestBed.get(HttpTestingController);
  }));
 
  

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set bars and buttons data', () =>{
      

      component.setProgressBarData(dummyData);

      expect(component.barsdata).toEqual(dummyData.bars);
      expect(component.barslimit).toEqual(dummyData.limit);
      expect(component.btns).toEqual(dummyData.buttons);
  });

  it("should change progress bar value",()=>{
      component.setProgressBarData(dummyData);
      component.selectedBar = 0;     
      component.onChangeProgress(dummyEvent);
      expect(component.barsdata[0]).toEqual(91);
  });
});
