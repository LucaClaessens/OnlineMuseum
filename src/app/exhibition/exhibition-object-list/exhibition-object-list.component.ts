import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'museum-exhibition-object-list',
  templateUrl: './exhibition-object-list.component.html',
  styleUrls: ['./exhibition-object-list.component.scss']
})
export class ExhibitionObjectListComponent implements OnInit {

  constructor() { }

  inScreenBounds = false;

  @Input() objects$: Observable<ObjectMetadataGroup[]>;

  ngOnInit() {
  }

}
