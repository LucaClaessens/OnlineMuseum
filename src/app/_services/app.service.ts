import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private openFloorplanSource = new Subject();
  openFloorplan$ = this.openFloorplanSource.asObservable();

  constructor() { }


  requestOpenFloorplan() {
    this.openFloorplanSource.next(true);
  }
}
