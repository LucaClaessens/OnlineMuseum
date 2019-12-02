import { Component, OnInit } from '@angular/core';
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

  startExhibitionSequence() {
    this.showBanner = true;
    setTimeout(() => this.appService.requestOpenFloorplan(), 1300);
  }

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}
