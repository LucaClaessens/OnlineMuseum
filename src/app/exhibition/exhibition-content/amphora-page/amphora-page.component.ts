import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'museum-amphora-page',
  templateUrl: './amphora-page.component.html',
  styleUrls: ['./amphora-page.component.scss']
})
export class AmphoraPageComponent implements AfterViewInit {

  timeIndicators: number[];
  footerText = 'Loading..';
  private observer: IntersectionObserver;
  private footerTextEntries: { year: number, text: string }[] = [
    { year: -530, text: 'Initial value loaded from array (-530)' },
    { year: -520, text: 'it is def -520😎' },
    { year: -510, text: '-510 ⏰' },
    { year: -490, text: 'Vases are objects! (-490)' },
    { year: -480, text: `Haha now it's 480 BC right?` }
  ];

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

  constructor(private elRef: ElementRef) {
    this.timeIndicators = [
      ...this.constructIndicators(-660, -250),
      0,
      ...this.constructIndicators(1390, 1950)
    ];
  }

  ngAfterViewInit() {
    const indicators: HTMLDivElement[] = Array.from(this.drag.nativeElement.querySelectorAll('div.time-indicator'));
    this.constructObserver(indicators);
  }

}
