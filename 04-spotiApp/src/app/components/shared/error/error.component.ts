import { Component, OnInit, Input } from '@angular/core';
import { Error } from "../../../interfaces/error";

@Component({
  selector: 'app-error',
  template: `<div class="alert alert-danger animated fadeIn">
                <h1>Error: {{ error.code }}</h1>
                <p>
                  {{ error.msg }}
                </p>
              </div>`
})
export class ErrorComponent implements OnInit {

  @Input() error:Error;

  constructor() {}

  ngOnInit() {
  }

}
