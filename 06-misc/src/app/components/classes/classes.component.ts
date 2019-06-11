import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {
  type:string;
  properties:Object;
  loading:boolean;

  constructor() { 
    this.type  =  "alert-danger"
    this.properties  =  {
      danger:true
    };
    this.loading  =  false;
  }

  ngOnInit() {
  }

  checkLoading():void {
    this.loading  =  true;
    setTimeout(() => this.loading  =  false, 3000);
  }

}
