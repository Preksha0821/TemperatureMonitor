import { Component } from '@angular/core';
import {TemperatureMonitorService} from '../app.temperatureMonitor.service';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  constructor(public temperatureMonitorService: TemperatureMonitorService) {
  }

  tempListLength() {
    return this.temperatureMonitorService.temperature_list.length;
  }

  tempList(){
    return this.temperatureMonitorService.temperature_list;
  }
}
