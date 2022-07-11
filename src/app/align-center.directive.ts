import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlignCenter]'
})
export class AlignCenterDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.textAlign = 'center'
  }

}
