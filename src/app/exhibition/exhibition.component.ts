import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';
import { tap, map, flatMap, pluck, filter } from 'rxjs/operators';
import { Observable, Subject, combineLatest } from 'rxjs';
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

  collectionId$: Observable<string>;
  eidx$ = this.route.queryParams.pipe(pluck<any, string>('eidx'), map(e => Number(e)));
  exhibitionMeta$: Observable<ExhibitionMetadata & { id: string }>;


  private setRouterState(cid, queryParams: Params = {}) {
    return this.router.navigate(['exhibition', cid], { queryParams, queryParamsHandling: 'merge' });
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exhibitionService: ExhibitionService
  ) { }

  ngOnInit() {

    this.collectionId$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('collectionId')),
      tap(async id => {
        if (id === 'current') {
          const latestCollection = await this.exhibitionService.preloadLatestCollection();
          const cid = latestCollection.id;
          return this.setRouterState(cid, { eidx: 0 });
        }
      })
    );

    this.exhibitionMeta$ = combineLatest(
      this.collectionId$.pipe(filter(cid => cid !== 'current')),
      this.eidx$
    ).pipe(
      flatMap(([cid, eidx]) => this.exhibitionService.fetchExhibition(cid, eidx))
    );

  }

}
