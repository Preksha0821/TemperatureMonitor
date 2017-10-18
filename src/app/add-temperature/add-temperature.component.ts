//Imports required
import { Component } from '@angular/core';
import {TemperatureMonitorService} from '../app.temperatureMonitor.service';

//@component decorator
@Component({
  selector: 'add-temperature',
  templateUrl: './add-temperature.component.html',
  styleUrls: ['./add-temperature.component.css']
})

//Add Temperature Class
export class AddTemperatureComponent {
  //Declarations
  temperature: number;
  count = 0;
  exceedLimit = false;
  exceedLimitText = '';
  currentValues=false;
  //constructor for service
  constructor(public temperatureMonitorService: TemperatureMonitorService) {
  }
  //Function to display the list of temperature
  tempList(){
    return this.temperatureMonitorService.temperature_list;
  }
  //Function for recording temperature
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
