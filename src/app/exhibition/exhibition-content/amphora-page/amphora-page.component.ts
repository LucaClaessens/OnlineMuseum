import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AmphoraService } from './amphora.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'museum-amphora-page',
  templateUrl: './amphora-page.component.html',
  styleUrls: ['./amphora-page.component.scss']
})
export class AmphoraPageComponent implements AfterViewInit, OnDestroy {

  timeIndicators: number[];
  footerText = 'Loading..';
  private observer: IntersectionObserver;
  private footerTextEntries: AmphoraFootnote[];
  private sub = new Subscription();

  @ViewChild('drag', { read: ElementRef, static: true }) drag: ElementRef;

  constructIndicators(yearStart: number, yearEnd: number) {

    const indicators: number[] = [];

    while (yearStart < yearEnd) {
      indicators.push(yearStart);
      yearStart += 10;
    }

    return indicators;
  }

  loadFooterTextForYearId(yearId: number) {
    const footerTextEntry = this.footerTextEntries.find(e => e.year === yearId);
    if (footerTextEntry) {
      this.footerText = footerTextEntry.text;
    }
  }

  constructObserver(nodes: HTMLElement[]) {

    const opts: IntersectionObserverInit = {
      threshold: 0.5
    };

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const visible = entries.filter(e => e.isIntersecting);
      visible.forEach(entry => {
        const dataset = (entry.target as HTMLDivElement).dataset;
        const yearIdAsNumber = Number(dataset.yearId);
        this.loadFooterTextForYearId(yearIdAsNumber);
      });
    };

    this.observer = new IntersectionObserver(callback, opts);

    nodes.forEach(node => this.observer.observe(node));
  }

  constructor(private elRef: ElementRef, private amphoraService: AmphoraService) {
    this.timeIndicators = [
      ...this.constructIndicators(-660, -250),
      0,
      ...this.constructIndicators(1390, 1950)
    ];
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    const indicators: HTMLDivElement[] = Array.from(this.drag.nativeElement.querySelectorAll('div.time-indicator'));

    this.sub.add(
      this.amphoraService.footnotes$.pipe(take(1)).subscribe(() => {
        this.constructObserver(indicators);
      })
    );

    this.sub.add(
      this.amphoraService.footnotes$.subscribe(notes => {
        this.footerTextEntries = notes;
      })
    );
  }

}
