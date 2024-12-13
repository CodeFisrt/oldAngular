import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private elementRef: ElementRef) { 
    //this.elementRef.nativeElement.style.color = "red";
    //this.elementRef.nativeElement.style.backgroundColor ="yellow"
   }

   //HOST Listner
   @HostListener('mouseover')
   onMouseHover() {
   
     this.elementRef.nativeElement.style.color = "red";
    this.elementRef.nativeElement.style.backgroundColor ="yellow"
   }

   @HostListener('mouseleave')
   onMouseLeft() {
    this.elementRef.nativeElement.style.color = "black";
    this.elementRef.nativeElement.style.backgroundColor ="white"
   }

}
