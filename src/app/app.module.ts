import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';

import {ProgressBarsService} from './progress-bars/progress-bars.service';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProgressBarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
