import {Component} from '@angular/core';
import {TemperatureMonitorService} from './app.temperatureMonitor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temperature: number;
  count = 0;
  exceedLimit = false;
  exceedLimitText = '';
  currentMedian = null;
  getMedian = false;
  constructor(public temperatureMonitorService: TemperatureMonitorService) {
  }

  tempListLength() {
    return this.temperatureMonitorService.temperature_list.length;
  }

  tempList(){
    return this.temperatureMonitorService.temperature_list;
  }

  getCurrentMedian() {
    let sortedTempList = this.temperatureMonitorService.temperature_list.sort((a, b) => a - b);

    this.currentMedian = (sortedTempList[(sortedTempList.length - 1) >> 1] + sortedTempList[sortedTempList.length >> 1]) / 2;
    this.getMedian=true;
    console.log(sortedTempList, this.currentMedian);
  }

  recordTemperature(temp: number): void {
    this.count++;
    if (this.count < 9) {
      this.temperatureMonitorService.recordTemperature(temp);
      this.temperature = null;
    } else {
      this.exceedLimitText = 'you have exceed your limits';
      this.exceedLimit = true;
    }
  }
}
