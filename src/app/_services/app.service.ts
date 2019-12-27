import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private openFloorplanSource = new Subject();
  openFloorplan$ = this.openFloorplanSource.asObservable();

  activePageUrl$ = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map((e) => e.url)
  );

  // tslint:disable-next-line: no-bitwise
  hashCode = s => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);

  constructor(private router: Router) { }


  requestOpenFloorplan() {
    this.openFloorplanSource.next(true);
  }
}
