//Import
import {Injectable} from '@angular/core';
@Injectable()
//Temperature monitor class
export class TemperatureMonitorService {
  temperature_list: number[] = [];


  constructor() {
  }
  //Service to record temperature
  recordTemperature(enteredTemperature: number): void {
    //console.log('enteredTemperature', enteredTemperature);
    this.temperature_list.push(enteredTemperature);
    console.log('temperature_list',this.temperature_list);
  }
}
