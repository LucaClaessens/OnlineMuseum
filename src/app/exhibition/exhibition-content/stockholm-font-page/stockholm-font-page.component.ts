import { Component, OnInit } from '@angular/core';
import '@google/model-viewer/dist/model-viewer';
import { boxImageUrl, comparison, boxImageShowDuration } from './config';
import { insertRemove } from './animation';
import { StockholmFontService } from './stockholm-font.service';

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
  boxToggled = false;
  showShop = false;
  modelList$ = this.stockholmFontService.modelList$;

  constructor(private stockholmFontService: StockholmFontService) {

    this.beforeImageUrl = comparison.before;
    this.afterImageUrl = comparison.after;

  }

  gotoShop() {
    this.showShop = true;
    this.showBoxImage = true;
    if (!this.boxToggled) {
      setTimeout(() => {
        this.showBoxImage = false;
        this.boxToggled = true;
      }, 3000);
    }
  }

  exitShop() {
    this.showShop = false;
  }

  ngOnInit() {
  }

}
