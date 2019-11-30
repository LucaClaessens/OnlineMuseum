import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'museum-content-tab',
  templateUrl: './content-tab.component.html',
  styleUrls: ['./content-tab.component.scss']
})
export class ContentTabComponent implements OnInit {

  @Input() title = 'Tab title';
  @Input() activatedRoute: string;

  constructor() { }

  ngOnInit() {
  }

}
