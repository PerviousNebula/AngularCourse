import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html'
})
export class NgSwitchComponent implements OnInit {

  @Input() alertType:string;

  constructor() { }

  ngOnInit() {
  }

}
