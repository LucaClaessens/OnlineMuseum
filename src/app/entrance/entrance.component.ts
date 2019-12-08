import { Component, OnInit, HostListener } from '@angular/core';
import { sideSlide } from './entrance.animations';
import { AppService } from '../_services/app.service';

@Component({
  selector: 'museum-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss'],
  animations: [sideSlide]
})
export class EntranceComponent implements OnInit {
  showBanner = false;
  hammered = false;

  startExhibitionSequence() {
    this.showBanner = true;
    setTimeout(() => this.appService.requestOpenFloorplan(), 1000);
  }

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

  @HostListener('window:blur', ['$event'])
  onWindowBlur(event: any): void {
    if (event.target) { // blurring away from chrome otherwise triggers this event as well..
      console.log('we out!', event);
      this.hammered = true;
      setTimeout(() => this.startExhibitionSequence(), 12000);
    }
  }

}
