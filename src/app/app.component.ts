import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './_services/app.service';
import { ContentTabComponent } from './_components/content-tab/content-tab.component';

@Component({
  selector: 'museum-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Online Museum';

  @ViewChild(ContentTabComponent, { static: false }) floorplan: ContentTabComponent;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.openFloorplan$.subscribe((plan) => {
      if (!this.floorplan.focused) {
        this.floorplan.toggle();
      }
    });
  }
}
