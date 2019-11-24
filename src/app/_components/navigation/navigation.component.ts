import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { navBarAnimation } from './navigation.animations';

@Component({
  selector: 'museum-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [navBarAnimation]
})
export class NavigationComponent implements OnInit {

  @Output() toggle = new EventEmitter();
  @Input() navigationActive = false;

  navToggleClicked() {
    this.navigationActive = !this.navigationActive;
    this.toggle.emit(this.navigationActive);
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
