import {Injectable} from '@angular/core';
@Injectable()
export class TemperatureMonitorService {
  temperature_list: number[] = [];


  constructor() {
  }

  recordTemperature(enteredTemperature: number): void {
    //console.log('enteredTemperature', enteredTemperature);
    this.temperature_list.push(enteredTemperature);
    console.log('temperature_list',this.temperature_list);
  }
}
