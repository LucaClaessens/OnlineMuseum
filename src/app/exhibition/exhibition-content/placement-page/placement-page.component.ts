import { Component, OnInit } from '@angular/core';
import dataSet from './miseEnSceneData.json';

@Component({
  selector: 'museum-placement-page',
  templateUrl: './placement-page.component.html',
  styleUrls: ['./placement-page.component.scss']
})
export class PlacementPageComponent implements OnInit {

  data = dataSet;

  constructor() { }

  ngOnInit() {
    console.log('data', this.data);
  }

}
