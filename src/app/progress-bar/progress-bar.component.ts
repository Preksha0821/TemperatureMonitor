//Imports required
import { Component } from '@angular/core';
import {TemperatureMonitorService} from '../app.temperatureMonitor.service';

//Component decorator
@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
//Progress bar class
export class ProgressBarComponent {
  //constructor to access service
  constructor(public temperatureMonitorService: TemperatureMonitorService) {
  }
  //Function to calculate length
  tempListLength() {
    return this.temperatureMonitorService.temperature_list.length;
  }
  //Function to display temperature list
  tempList(){
    return this.temperatureMonitorService.temperature_list;
  }
}
