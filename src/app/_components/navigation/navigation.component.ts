import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { navBarAnimation } from './navigation.animations';

@Component({
  selector: 'museum-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [navBarAnimation]
})
export class NavigationComponent implements OnInit {

  navCollapsed$: Observable<boolean>;
  navigationActive = false;

  navToggleClicked() {
    this.navigationActive = !this.navigationActive;
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    this.navCollapsed$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.router.url.includes('exhibition'))
    );

  }

}
