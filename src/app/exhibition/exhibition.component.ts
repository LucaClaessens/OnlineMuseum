import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';
import { tap, map, flatMap, pluck, filter, take } from 'rxjs/operators';
import { Observable, Subject, combineLatest, Subscription } from 'rxjs';
import { ExhibitionService } from '../_services/exhibition/exhibition.service';
import { fadeValueChange, detailAnimation } from './exhibition.animations';
import { AmphoraPageComponent } from './exhibition-content/amphora-page/amphora-page.component';
import { ExhibitionNotFoundComponent } from './exhibition-content/exhibition-not-found/exhibition-not-found.component';

@Component({
  selector: 'museum-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss'],
  animations: [fadeValueChange, detailAnimation]
})
export class ExhibitionComponent implements OnInit, OnDestroy {

  showNavSource = new Subject();
  collectionId$: Observable<string>;
  componentRef: ComponentRef<any>;

  eidx$ = this.route.queryParams.pipe(pluck<any, string>('eidx'), map(e => Number(e)));
  exhibitionMeta$: Observable<ExhibitionMetadata & { id: string }>;

  private sub = new Subscription();

  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: false }) dynamicContainer;


  private setRouterState(cid, queryParams: Params = {}) {
    return this.router.navigate(['exhibition', cid], { queryParams, queryParamsHandling: 'merge' });
  }

  getComponentFromTypeIDString(typeID: string) {
    switch (typeID) {
      case 'museum-amphora-page': return AmphoraPageComponent;
      default: return ExhibitionNotFoundComponent;
    }
  }

  createComponent(typeString: string) {
    const comp = this.getComponentFromTypeIDString(typeString);
    this.dynamicContainer.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(comp);
    this.componentRef = this.dynamicContainer.createComponent(factory);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exhibitionService: ExhibitionService,
    private resolver: ComponentFactoryResolver
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

    this.sub.add(
      this.exhibitionMeta$.pipe(pluck('loadId')).subscribe(
        // We use setTimeout here to make sure our callstack is cleared and the
        // templateRef for `this.dynamicContainer` is present, as it resides in a
        // conditional (*ngIf) block.
        loadId => setTimeout(() => this.createComponent(loadId), 1)
      ));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
