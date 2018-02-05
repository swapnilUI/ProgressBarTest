import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProgressBarsService {

  constructor(private http:HttpClient) { }

  getDefaults(){
     return this.http.get('https://pb-api.herokuapp.com/bars');
  }
}
