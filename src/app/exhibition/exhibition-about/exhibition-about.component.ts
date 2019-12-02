import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'museum-exhibition-about',
  templateUrl: './exhibition-about.component.html',
  styleUrls: ['./exhibition-about.component.scss']
})
export class ExhibitionAboutComponent implements OnInit {

  constructor() { }

  @Input() data$: Observable<ExhibitionMetadata>;

  ngOnInit() {
  }

}
