import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';
import { tap, map, flatMap, take } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ExhibitionService } from '../_services/exhibition/exhibition.service';
import { fadeValueChange, detailAnimation } from './exhibition.animations';

@Component({
  selector: 'museum-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss'],
  animations: [fadeValueChange, detailAnimation]
})
export class ExhibitionComponent implements OnInit {

  showNavSource = new Subject();

  exhibitionId$: Observable<string>;
  exhibitionMeta$: Observable<{ title: string, description: string }>;
  showDetails$: Observable<boolean>;
  showNav$ = this.showNavSource.asObservable();


  toggleNav(state) {
    this.showNavSource.next(state);
  }

  private setRouterState(idx, queryParams: Params = {}) {
    return this.router.navigate(['exhibition', idx], { queryParams, queryParamsHandling: 'merge' });
  }

  nextExhibition() {
    return this.setRouterState(this.exhibitionService.getNextIdx());
  }

  prevExhibition() {
    return this.setRouterState(this.exhibitionService.getPrevIdx());
  }

  async toggleDetails(_e: MouseEvent) {
    const active = await this.showDetails$.pipe(take(1)).toPromise();
    return active ? this.closeDetails() : this.displayDetails();
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
      map((params: Params) => {
        const active = params.details !== undefined ? JSON.parse(params.details) : false;
        return active;
      })
    );
  }

}
