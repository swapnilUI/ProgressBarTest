import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import {ProgressBarsService} from './progress-bars/progress-bars.service';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProgressBarsComponent
      ],
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers:[ProgressBarsService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
});

