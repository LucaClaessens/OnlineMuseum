import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { tap, map, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ExhibitionService } from '../_services/exhibition/exhibition.service';
import { fadeValueChange, detailAnimation } from './exhibition.animations';

@Component({
  selector: 'museum-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss'],
  animations: [fadeValueChange, detailAnimation]
})
export class ExhibitionComponent implements OnInit {

  exhibitionId$: Observable<string>;
  exhibitionMeta$: Observable<string>;
  showDetails$: Observable<boolean>;

  private setRouterState(idx, showDetails) {
    return this.router.navigate(['exhibition', idx, showDetails]);
  }

  nextExhibition() {
    return this.setRouterState(this.exhibitionService.getNextIdx(), false);
  }

  prevExhibition() {
    return this.setRouterState(this.exhibitionService.getPrevIdx(), false);
  }

  displayDetails() {
    return this.setRouterState(this.exhibitionService.currentExhibitionIdx, true);
  }

  closeDetails() {
    return this.setRouterState(this.exhibitionService.currentExhibitionIdx, false);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exhibitionService: ExhibitionService
  ) { }

  ngOnInit() {

    this.exhibitionId$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      tap(id => {
        if (id === 'current') {
          const idx = this.exhibitionService.latestExhibitionIdx;
          return this.setRouterState(idx, false);
        }
      })
    );

    this.exhibitionMeta$ = this.exhibitionId$.pipe(
      flatMap(id => this.exhibitionService.loadExhibition(Number(id)))
    );

    this.showDetails$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('showDetails')),
      map(details => JSON.parse(details) === true)
    );
  }

}
