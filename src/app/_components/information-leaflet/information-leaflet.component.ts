import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'museum-information-leaflet',
  templateUrl: './information-leaflet.component.html',
  styleUrls: ['./information-leaflet.component.scss']
})
export class InformationLeafletComponent implements OnInit {

  constructor() { }

  @Output() clicked = new EventEmitter();

  @HostListener('click') onClick() {
    this.clicked.emit();
  }

  ngOnInit() {
  }

}
