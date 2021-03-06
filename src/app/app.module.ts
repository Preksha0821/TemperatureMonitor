//imports required
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TemperatureMonitorService} from './app.temperatureMonitor.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddTemperatureComponent } from './add-temperature/add-temperature.component';
import { GetMedianComponent } from './get-median/get-median.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

//ngmodule decorator that has all declarations for every component,imports, providers
@NgModule({
  declarations: [
    AppComponent,
    AddTemperatureComponent,
    GetMedianComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [TemperatureMonitorService],
  bootstrap: [AppComponent]
})
//main class
export class AppModule {
}
