import { Component, OnInit } from '@angular/core';
import {ProgressBarsService} from './progress-bars.service';

@Component({
  selector: 'app-progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./progress-bars.component.scss']
})
export class ProgressBarsComponent implements OnInit {
  barsdata: number[];
  barslimit:number;
  btns: number[];
  selectedBar:number;
  
  constructor(private progressBarsService:ProgressBarsService) {
    
   }

  ngOnInit() {
    this.selectedBar = 0;
    this.getConfig();
  }

  getConfig(){
      this.progressBarsService.getDefaults().subscribe(data => {        
          this.setProgressBarData(data);
      })
  }
  setProgressBarData(data){
        this.barsdata = data["bars"];        
        this.barslimit = data["limit"];
        this.btns = data["buttons"];
  }
  onChangeProgress(event){      
      var target = event.target || event.srcElement || event.currentTarget;
      var val = target.attributes["data-val"].nodeValue;
      var curVal = this.barsdata[this.selectedBar];
      
      var newVal = curVal + parseInt(val);
      if(newVal < 0){
        newVal = 0;
      }
      this.barsdata[this.selectedBar] = newVal;
  }
}
