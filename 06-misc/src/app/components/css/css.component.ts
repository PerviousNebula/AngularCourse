import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p class="mt-5 letra-bold">
      Hola mundo desde app-css
    </p>
  `,
  styles: [`
    p {
      font-size:25px;
      color:red;      
      font-weight: bolder;
    }    
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}