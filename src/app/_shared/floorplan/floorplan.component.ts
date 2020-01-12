import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AppService } from 'src/app/_services/app.service';
import { tap, map, debounceTime, mapTo, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { fromEvent, merge, Subject } from 'rxjs';

enum routeIDToClass {
  'Lw==' = 'entrance',
  'L2VudHJhbmNl' = 'entrance',
  'L2V4aGliaXRpb24veThhOGFxSjJFeE11SG1XcmVaWkk/ZWlkeD0w' = 'sevenclicks',
  'L2V4aGliaXRpb24veThhOGFxSjJFeE11SG1XcmVaWkk/ZWlkeD0x' = 'amphora',
  'L2V4aGliaXRpb24veThhOGFxSjJFeE11SG1XcmVaWkk/ZWlkeD0y' = 'miseenscene',
  'L2V4aGliaXRpb24veThhOGFxSjJFeE11SG1XcmVaWkk/ZWlkeD0z' = 'stockholmfont'
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

  pointerOffset: { top: number, left: number };
  private activeNode: HTMLElement;
  init$ = new Subject();

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

  repositionPointerBeneath(node: HTMLElement) {
    const prevActiveNode: HTMLElement = this.elRef.nativeElement.querySelector(`.active-text`);
    const container = this.elRef.nativeElement;

    if (!node) { return; }

    if (prevActiveNode) {
      prevActiveNode.classList.remove('active-text');
    }

    node.classList.add('active-text');
    const nodeRect = node.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    this.pointerOffset = {
      top: nodeRect.top - containerRect.top + 15,
      left: nodeRect.left - containerRect.left - 15
    };

  }

  initPointer(state) {
    setTimeout(() => {
      this.init$.next(state);
    })
  }

  constructor(private app: AppService, private router: Router, private elRef: ElementRef) { }

  ngAfterViewInit() {

    const routeChange = this.activeRouteAsClass$.pipe(
      debounceTime(200),
      map((className) => {
        const node = this.elRef.nativeElement.querySelector(`#${className}-text`);
        return node;
      }));

    const resize = fromEvent(window, 'resize').pipe(debounceTime(200));

    merge(
      routeChange.pipe(tap(n => this.activeNode = n)),
      resize,
      this.init$,
    ).subscribe(() => this.repositionPointerBeneath(this.activeNode));

  }

}
