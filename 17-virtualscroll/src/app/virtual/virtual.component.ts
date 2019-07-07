import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
  @ViewChild( CdkVirtualScrollViewport, {static:false} ) viewport:CdkVirtualScrollViewport;

  public personas  =  Array(500).fill(0);

  constructor() { }

  ngOnInit() { }

  public irInicio():void { this.viewport.scrollToIndex(0); }

  public irEnMedio():void { this.viewport.scrollToIndex(this.personas.length / 2); }

  public irFinal():void { this.viewport.scrollToIndex(this.personas.length); }

}
