import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';
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

  private setRouterState(idx, queryParams: Params = {}) {
    return this.router.navigate(['exhibition', idx], { queryParams, queryParamsHandling: 'merge' });
  }

  nextExhibition() {
    return this.setRouterState(this.exhibitionService.getNextIdx());
  }

  prevExhibition() {
    return this.setRouterState(this.exhibitionService.getPrevIdx());
  }

  toggleDetails(state) {
    return state ? this.displayDetails() : this.closeDetails();
  }

  displayDetails() {
    return this.setRouterState(this.exhibitionService.currentExhibitionIdx, { details: true });
  }

  closeDetails() {
    return this.setRouterState(this.exhibitionService.currentExhibitionIdx, { details: false });
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
          return this.setRouterState(idx, { details: false });
        }
      })
    );

    this.exhibitionMeta$ = this.exhibitionId$.pipe(
      flatMap(id => this.exhibitionService.loadExhibition(Number(id)))
    );

    this.showDetails$ = this.route.queryParams.pipe(
      map((params: Params) => params.details),
      map(details => JSON.parse(details) === true)
    );
  }

}
