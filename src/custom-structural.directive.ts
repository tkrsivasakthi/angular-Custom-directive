import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStructural]',
})
export class CustomStructuralDirective {
  constructor(
    private templateref: TemplateRef<any>,
    private viewcontainerref: ViewContainerRef
  ) {}

  @Input() set appCustomStructural(condition: boolean) {
    if (!condition) {
      this.viewcontainerref.createEmbeddedView(this.templateref);
    } else {
      this.viewcontainerref.clear();
    }
  }
}
