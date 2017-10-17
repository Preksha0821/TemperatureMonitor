import { Component } from '@angular/core';
import {TemperatureMonitorService} from '../app.temperatureMonitor.service';


@Component({
  selector: 'add-temperature',
  templateUrl: './add-temperature.component.html',
  styleUrls: ['./add-temperature.component.css']
})
export class AddTemperatureComponent {
  temperature: number;
  count = 0;
  exceedLimit = false;
  exceedLimitText = '';
  currentValues=false;
  constructor(public temperatureMonitorService: TemperatureMonitorService) {
  }
  tempList(){
    return this.temperatureMonitorService.temperature_list;
  }

  recordTemperature(temp: number): void {
    this.count++;
    if (this.count < 9) {
      this.temperatureMonitorService.recordTemperature(temp);
      this.currentValues=true;
      //this.temperature = null;
    } else {
      this.exceedLimitText = 'You have exceeded your limit';
      this.exceedLimit = true;
    }
  }
}
