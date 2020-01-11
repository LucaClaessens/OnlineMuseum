import { Component, OnInit } from '@angular/core';
import '@google/model-viewer';
import { boxImageUrl, comparison, boxImageShowDuration } from './config';
import { insertRemove } from './animation';

@Component({
  selector: 'museum-stockholm-font-page',
  templateUrl: './stockholm-font-page.component.html',
  styleUrls: ['./stockholm-font-page.component.scss'],
  animations: [insertRemove]
})
export class StockholmFontPageComponent implements OnInit {

  beforeImageUrl: string;
  afterImageUrl: string;
  boxImage = boxImageUrl;
  showBoxImage = false;
  showShop = false;

  constructor() {

    this.beforeImageUrl = comparison.before;
    this.afterImageUrl = comparison.after;

  }

  gotoShop() {
    this.showShop = true;
    this.showBoxImage = true;
    setTimeout(() => {
      this.showBoxImage = false;
    }, 3000);
  }

  exitShop() {
    this.showShop = false;
  }

  ngOnInit() {
  }

}
