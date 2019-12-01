import { Component, OnInit } from '@angular/core';
import { sideSlide } from './entrance.animations';

@Component({
  selector: 'museum-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss'],
  animations: [sideSlide]
})
export class EntranceComponent implements OnInit {
  showBanner = false;

  startExhibitionSequence() {
    this.showBanner = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
