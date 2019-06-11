import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") backColor:string;

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') entroMouse() {        
    this.el.nativeElement.style.backgroundColor  =  this.backColor;
    this.el.nativeElement.style.color            =  "white";
  }

  @HostListener('mouseleave') salioMouse() {
    this.el.nativeElement.style.backgroundColor  =  "";
    this.el.nativeElement.style.color            =  "";
  }

}