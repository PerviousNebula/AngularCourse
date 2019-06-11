import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <br><br>
    <app-classes></app-classes>
    <p appResaltado="blue">Aplicando directiva</p>
    <br>
    <app-ng-switch [alertType]="'success'"></app-ng-switch>
    <br><br>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
