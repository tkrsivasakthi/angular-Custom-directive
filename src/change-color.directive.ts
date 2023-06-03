import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  host: {
    '(click)': 'applyColor()',
  },
})
export class ChangeColorDirective {
  constructor(private el: ElementRef) {
    this.el = el;
  }

  applyColor() {
    this.el.nativeElement.style.color = 'red';
  }
}
