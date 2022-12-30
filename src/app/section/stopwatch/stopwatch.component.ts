import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PageToggleService} from "../../share/page-toggle.service";

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  //providers: [PageToggleService]
})
export class StopwatchComponent {

  present = 'welcome';

  routingCount: any
  commandText: any


  constructor(
    private router : Router,
    //접근제한자를 설정해주면 멤버변수로 자동으로 등록
    public pageToggleService : PageToggleService

  ) { }

  goClock(){
    this.pageToggleService.goPage('/clock')
  }

  startTime($event: any){
    this.present = $event;
  }
}
