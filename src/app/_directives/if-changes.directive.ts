import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ifChanges]'
})
export class IfChangesDirective {

  private currentValue: any;
  private hasView = false;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input() set ifChanges(val: any) {
    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (val !== this.currentValue) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.currentValue = val;
    }
  }

}