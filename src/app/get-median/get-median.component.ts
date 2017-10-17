import { Component } from '@angular/core';
import {TemperatureMonitorService} from '../app.temperatureMonitor.service';

@Component({
  selector: 'get-median',
  templateUrl: './get-median.component.html',
  styleUrls: ['./get-median.component.css']
})
export class GetMedianComponent {
  currentMedian = null;
  getMedian = false;

  constructor(public temperatureMonitorService: TemperatureMonitorService) {
  }
  getCurrentMedian() {
    let sortedTempList = this.temperatureMonitorService.temperature_list.sort((a, b) => a - b);

    this.currentMedian = (sortedTempList[(sortedTempList.length - 1) >> 1] + sortedTempList[sortedTempList.length >> 1]) / 2;
    this.getMedian=true;
    console.log(sortedTempList, this.currentMedian);
  }

  tempListLength() {
    return this.temperatureMonitorService.temperature_list.length;
  }
  tempList(){
    return this.temperatureMonitorService.temperature_list;
  }
}
