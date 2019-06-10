import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="fontSize">
      Hola mundo desde app-ng-style!
    </p>
    <button class="btn btn-primary" (click)="fontSize = fontSize + 2"><i class="fa fa-plus"></i></button>    
    <button class="btn btn-danger" (click)="fontSize = fontSize - 2"><i class="fa fa-minus"></i></button>    
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  fontSize:number;

  constructor() { 
    this.fontSize  =  14;
  }

  ngOnInit() {
  }

}
