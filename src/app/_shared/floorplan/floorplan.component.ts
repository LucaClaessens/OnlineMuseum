import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'museum-floorplan',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.scss']
})
export class FloorplanComponent implements OnInit {

  constructor() { }

  @Input() routeId = 'entrance';

  ngOnInit() {
  }

}
