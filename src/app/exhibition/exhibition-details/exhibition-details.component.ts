import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'museum-exhibition-details',
  templateUrl: './exhibition-details.component.html',
  styleUrls: ['./exhibition-details.component.scss']
})
export class ExhibitionDetailsComponent implements OnInit {

  @Output() exit = new EventEmitter();

  closeDetails() {
    this.exit.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
