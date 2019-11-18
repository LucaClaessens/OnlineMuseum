import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'museum-exhibition-navigation',
  templateUrl: './exhibition-navigation.component.html',
  styleUrls: ['./exhibition-navigation.component.scss']
})
export class ExhibitionNavigationComponent implements OnInit {

  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
