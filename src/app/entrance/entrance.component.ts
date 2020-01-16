import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { sideSlide } from './entrance.animations';
import { AppService } from '../_services/app.service';
import { ExhibitionBannerComponent } from '../_components/exhibition-banner/exhibition-banner.component';

@Component({
  selector: 'museum-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss'],
  animations: [sideSlide]
})
export class EntranceComponent implements OnInit {
  showBanner = false;
  hammered = false;
  hasBlurred = false;

  @ViewChild('banner', { static: true }) banner: ExhibitionBannerComponent;

  startExhibitionSequence() {
    this.showBanner = true;
    this.banner.initSequences();
    setTimeout(() => this.appService.requestOpenFloorplan(), 1000);
  }

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

  @HostListener('window:blur', ['$event'])
  onWindowBlur(event: any): void {
    if (event.target && !this.hasBlurred) { // blurring away from chrome otherwise triggers this event as well..
      this.hammered = true;
      this.hasBlurred = true;
      setTimeout(() => this.startExhibitionSequence(), 12000);
    }
  }

}
