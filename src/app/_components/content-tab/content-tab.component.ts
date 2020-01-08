import { Component, OnInit, OnDestroy, Input, HostBinding, Output, EventEmitter, ElementRef } from '@angular/core';
import { focusAnimation } from './content-tab.animations';

@Component({
  selector: 'museum-content-tab',
  templateUrl: './content-tab.component.html',
  styleUrls: ['./content-tab.component.scss'],
  animations: [focusAnimation]
})
export class ContentTabComponent implements OnInit, OnDestroy {

  @HostBinding('@focusAnimation') get getFocusAnimation(): string {
    return this.focused ? 'visible' : 'hidden';
  }

  @Input() header = 'Tab title';
  @Input() focused = false;

  @Output() initialFocus = new EventEmitter();

  private initialFocusEmitted = false;
  private observer: MutationObserver;

  private checkInitialFocus() {
    if (this.focused && !this.initialFocusEmitted) {
      this.initialFocus.emit();
      this.initialFocusEmitted = true;
    }
  }

  toggle() {
    this.focused = !this.focused;

    this.checkInitialFocus();
  }

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    const el = this.elRef.nativeElement;

    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const { target } = mutation;
        const disabled = (target as HTMLElement).getAttribute('disabled');
        if (disabled === 'true') {
          this.focused = false;
        }
      });
    });

    this.observer.observe(el, {
      attributes: true,
      attributeFilter: ['disabled']
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

}
