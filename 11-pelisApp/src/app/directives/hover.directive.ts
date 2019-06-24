import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private er:ElementRef) {}

  @HostListener('mouseenter') mouseEntered() {
    this.er.nativeElement.classList.add("animated","shake","infinite");
  };

  @HostListener('mouseleave') mouseLeaved() {
    this.er.nativeElement.classList.remove("animated","shake","infinite");
  };

}
