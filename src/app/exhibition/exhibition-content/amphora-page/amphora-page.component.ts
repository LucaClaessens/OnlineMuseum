import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'museum-amphora-page',
  templateUrl: './amphora-page.component.html',
  styleUrls: ['./amphora-page.component.scss']
})
export class AmphoraPageComponent implements OnInit {

  timeIndicators: number[];

  constructIndicators(yearStart: number, yearEnd: number) {

    const indicators: number[] = [];

    while (yearStart < yearEnd) {
      indicators.push(yearStart);
      yearStart += 10;
    }

    return indicators;
  }

  constructor() {
    this.timeIndicators = this.constructIndicators(-530, 230);
  }

  ngOnInit() {

  }

}
