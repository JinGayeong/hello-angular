import {Component, Input, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent {

  @Input() inputData: string | undefined;

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval: NodeJS.Timer | undefined;

  constructor() {
/*    setInterval(() => {

      this.test ++;

    }, 1000)*/

  }


  timeStart(){
    this.timeStop();
    this.timeInterval = setInterval(() => {
      this.ms++;
    }, 10)
  }

  timeStop(){
    clearInterval(this.timeInterval)
  }

  timeReset(){
    this.timeStop();
    this.ms = 0;
  }

/*  ngOnChanges(changes: SimpleChange) {
    //console.log(changes)
    for(let propName in changes){

      // @ts-ignore
      switch (changes[propName].currentValue){
        case 'start':
          this.timeStart();
          break;
        case 'stop':
          this.timeStop();
          break;
        case 'reset':
          this.timeReset();
          break;
      }
    }
  }*/


}
