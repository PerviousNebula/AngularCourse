import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `<div class="row text-center animated fadeIn">
                <div class="col">
                  <i class="fas fa-sync fa-5x fa-spin"></i>
                </div>
              </div>`
})
export class LoadingComponent implements OnInit {  

  constructor() { }

  ngOnInit() {
  }

}
