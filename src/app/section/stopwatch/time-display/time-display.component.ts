import {Component, Input, SimpleChange} from '@angular/core';
import {PageToggleService} from "../../../share/page-toggle.service";

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  providers: [PageToggleService]
})
export class TimeDisplayComponent {

  @Input() inputData: string | undefined;

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval: NodeJS.Timer | undefined;

  constructor(
    public pageToggleService : PageToggleService
  ) {
/*    setInterval(() => {

      this.test ++;

    }, 1000)*/

  }

  ngOnChanges(changes: SimpleChange){
    console.log('ng on changes');
    for (let propName in changes) {

    }
  }
  ngOnInit() {
    console.log('ng on init')
  }
  ngDoCheck() {
    console.log('ng do check')
  }
  ngAfterContentInit() {
    console.log('ng after content init')
  }
  ngAfterContentChecked() {
    console.log('ng after content checked')
  }
  ngAfterViewInit() {
    console.log('ng after view init')
  }
  ngAfterViewChecked() {
    console.log('ng after view checked')
  }
  ngDestroy() {
    console.log('ng destroy')
  }


  timeStart(){
    //this.pageToggleService.plusCount();

    this.timeStop();
    this.timeInterval = setInterval(() => {
      if(this.ms >= 100) {
        this.ms = 0;
        this.sec++;
      }
      if(this.sec >= 60) {
        this.sec = 0;
        this.min++;
      }
      this.ms++;
    }, 10)
  }

  timeStop(){
    clearInterval(this.timeInterval)
  }

  timeReset(){
    this.timeStop();
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
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
