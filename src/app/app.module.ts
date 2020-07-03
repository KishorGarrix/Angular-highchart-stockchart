import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as highstock from 'highcharts/modules/stock.src';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [highstock]}    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
