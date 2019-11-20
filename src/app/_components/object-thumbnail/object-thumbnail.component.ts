import { Component, OnInit, Input } from '@angular/core';
import { loadAnimation, growAnimation } from './thumb.animation';

@Component({
  selector: 'museum-object-thumbnail',
  templateUrl: './object-thumbnail.component.html',
  styleUrls: ['./object-thumbnail.component.scss'],
  animations: [loadAnimation, growAnimation]
})
export class ObjectThumbnailComponent implements OnInit {
  imageLoaded = false;


  // tslint:disable-next-line: max-line-length
  @Input() src = 'https://imgix.bustle.com/rehost/2016/9/13/5bd99433-573e-4715-a9f9-47581893b877.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70';
  @Input() alt = 'Demo';

  constructor() { }

  onImageLoad(evt) {
    if (evt && evt.target) {
      setTimeout(() => this.imageLoaded = true, 100);
    }
  }

  ngOnInit() {
  }

}
