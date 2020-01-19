import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './_services/app.service';
import { ContentTabComponent } from './_components/content-tab/content-tab.component';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'museum-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Online Museum';

  @ViewChild(ContentTabComponent, { static: false }) floorplan: ContentTabComponent;

  constructor(private appService: AppService, private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
    this.swUpdate.available.subscribe(() => {
      const snack = this.snackbar.open('🏛 There\'s an update of the museum available', 'Reload', {
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });

      setTimeout(() => {
        snack.dismiss();
      }, 10000);
    });
  }

  ngOnInit() {

    this.appService.openFloorplan$.subscribe((plan) => {
      if (!this.floorplan.focused) {
        this.floorplan.toggle();
      }
    });
  }
}
