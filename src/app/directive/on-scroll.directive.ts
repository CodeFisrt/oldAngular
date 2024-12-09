import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnScroll]'
})
export class OnScrollDirective {

  constructor() { }

  @HostListener('window:scroll')
  onScroll() {
    console.log("Page Scrolled")
  }

  @HostListener('scroll')
  onScroll2() {
    console.log("Page Scrolled 222")
  }


}
