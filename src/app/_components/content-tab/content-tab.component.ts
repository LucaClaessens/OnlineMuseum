import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { focusAnimation } from './content-tab.animations';

@Component({
  selector: 'museum-content-tab',
  templateUrl: './content-tab.component.html',
  styleUrls: ['./content-tab.component.scss'],
  animations: [focusAnimation]
})
export class ContentTabComponent implements OnInit {

  @HostBinding('@focusAnimation') get getFocusAnimation(): string {
    return this.focused ? 'visible' : 'hidden';
  }

  @Input() header = 'Tab title';
  @Input() focused = false;

  @Output() initialFocus = new EventEmitter();

  private initialFocusEmitted = false;

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

  constructor() { }

  ngOnInit() {
  }

}
