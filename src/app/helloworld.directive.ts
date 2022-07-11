import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHelloworld]'
})
export class HelloworldDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = "orange"
  }

}
