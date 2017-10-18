//Imports required
import { Component } from '@angular/core';
import {TemperatureMonitorService} from '../app.temperatureMonitor.service';

//Component decorator
@Component({
  selector: 'get-median',
  templateUrl: './get-median.component.html',
  styleUrls: ['./get-median.component.css']
})

//Get median class
export class GetMedianComponent {
  currentMedian = null;
  getMedian = false;

  //constructor to access service
  constructor(public temperatureMonitorService: TemperatureMonitorService) {
  }
  //Function to calculate median
  getCurrentMedian() {
    let sortedTempList = this.temperatureMonitorService.temperature_list.sort((a, b) => a - b);

    this.currentMedian = (sortedTempList[(sortedTempList.length - 1) >> 1] + sortedTempList[sortedTempList.length >> 1]) / 2;
    this.getMedian=true;
    console.log(sortedTempList, this.currentMedian);
  }

  //Function that calculates the length of temperature list
  tempListLength() {
    return this.temperatureMonitorService.temperature_list.length;
  }

  //Function for temperature list
  tempList(){
    return this.temperatureMonitorService.temperature_list;
  }
}
