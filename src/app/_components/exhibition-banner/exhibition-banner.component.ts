import { Component, OnInit } from '@angular/core';
import { fadeValueChange } from './exhibition-banner.animation';

@Component({
  selector: 'museum-exhibition-banner',
  templateUrl: './exhibition-banner.component.html',
  styleUrls: ['./exhibition-banner.component.scss'],
  animations: [fadeValueChange]
})
export class ExhibitionBannerComponent implements OnInit {

  private subjects = [
    'Seven clicks',
    'Product placement',
    'The emoji amphora',
    'Artifact artifices',
  ];

  exhibitionHeaderSubject: string;

  private loadNextSubject() {
    const idx = this.subjects.findIndex(s => s === this.exhibitionHeaderSubject);
    const next = idx === this.subjects.length - 1 ? 0 : idx + 1;
    this.exhibitionHeaderSubject = this.subjects[next];
  }

  constructor() { }

  ngOnInit() {
    this.loadNextSubject();
    setInterval(() => this.loadNextSubject(), 10000);
  }

}
