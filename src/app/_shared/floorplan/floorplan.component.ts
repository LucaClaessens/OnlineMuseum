import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AppService } from 'src/app/_services/app.service';
import { tap, map, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

enum routeIDToClass {
  'L2VudHJhbmNl' = 'entrance',
  'L2V4aGliaXRpb24veThhOGFxSjJFeE11SG1XcmVaWkk/ZWlkeD0w' = 'sevenclicks',
  'L2V4aGliaXRpb24veThhOGFxSjJFeE11SG1XcmVaWkk/ZWlkeD0x' = 'amphora'
}

@Component({
  selector: 'museum-floorplan',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.scss']
})
export class FloorplanComponent implements AfterViewInit {

  @ViewChild('pointer', { static: true }) pointer;

  activeRouteAsClass$ = this.app.activePageUrl$.pipe(
    map((url) => {
      const hash = btoa(url);
      return hash;
    }),
    tap(console.warn),
    map((url) => routeIDToClass[url])
  );

  svgClicked(event: MouseEvent) {
    const tappedElem = event.target as HTMLElement;

    // Did we click a tappable rectangle?
    if (tappedElem.nodeName === 'rect') {
      const nearestHoverableParent = tappedElem.parentElement;
      // is it in the right type of container?
      if (nearestHoverableParent.nodeName === 'g'
        && nearestHoverableParent.classList.contains('hoverable')) {
        const target = nearestHoverableParent.id;
        const matchingMapEntry = Object.entries(routeIDToClass).find(([_k, v]) => v === target);
        // If we find a configured route to navigate to, we go there.
        if (matchingMapEntry) {
          const routeOfTarget = atob(matchingMapEntry[0]);
          this.router.navigateByUrl(routeOfTarget);
        }
      }
    }

  }

  loadPointerBeneath(node: HTMLElement) {
    const pointer = this.pointer.nativeElement;
    const top = node.offsetTop;
    const left = node.offsetLeft;

    pointer.style.top = `${top} px`;
    pointer.style.left = `${left} px`;
  }

  constructor(private app: AppService, private router: Router, private elRef: ElementRef) { }

  ngAfterViewInit() {
    this.activeRouteAsClass$.pipe(
      debounceTime(500),
      map((className) => {
        const node = this.elRef.nativeElement.querySelector(`#${className}-text`);
        return node;
      })
    ).subscribe(node => this.loadPointerBeneath(node));
  }

}
