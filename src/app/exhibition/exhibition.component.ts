import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';
import { tap, map, flatMap, pluck, filter } from 'rxjs/operators';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { ExhibitionService } from '../_services/exhibition/exhibition.service';
import { fadeValueChange, detailAnimation } from './exhibition.animations';
import { AmphoraPageComponent } from './exhibition-content/amphora-page/amphora-page.component';
import { ExhibitionNotFoundComponent } from './exhibition-content/exhibition-not-found/exhibition-not-found.component';
import { PlacementPageComponent } from './exhibition-content/placement-page/placement-page.component';
import { StockholmFontPageComponent } from './exhibition-content/stockholm-font-page/stockholm-font-page.component';

@Component({
  selector: 'museum-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss'],
  animations: [fadeValueChange, detailAnimation]
})
export class ExhibitionComponent implements OnInit, OnDestroy {

  collectionId$: Observable<string>;
  componentRef: ComponentRef<any>;

  eidx$ = this.route.queryParams.pipe(pluck<any, string>('eidx'), map(e => Number(e)));
  exhibitionMeta$: Observable<ExhibitionMetadata & { id: string }>;
  objects$: Observable<ObjectMetadataGroup[]>;
  disableObjectTab$: Observable<boolean>;
  componentMayLoad = true;

  private sub = new Subscription();

  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: false }) dynamicContainer;


  private setRouterState(cid, queryParams: Params = {}) {
    return this.router.navigate(['exhibition', cid], { queryParams, queryParamsHandling: 'merge' });
  }

  getComponentFromTypeIDString(typeID: string) {
    switch (typeID) {
      case 'museum-amphora-page': return AmphoraPageComponent;
      case 'museum-placement-page': return PlacementPageComponent;
      case 'museum-stockholm-font-page': return StockholmFontPageComponent;
      case '404': return ExhibitionNotFoundComponent;
      default: return ExhibitionNotFoundComponent;
    }
  }

  createComponent(typeString: string) {

    const comp = this.getComponentFromTypeIDString(typeString);
    if (!this.dynamicContainer) { return; }
    this.dynamicContainer.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory<any>(comp);
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

    this.objects$ = this.exhibitionMeta$.pipe(
      flatMap(exhibition => this.exhibitionService.fetchExhibitionObjects(exhibition.id)),
      map(groups => groups.sort((a, b) => {
        const _a = a.key.toLowerCase();
        const _b = b.key.toLowerCase();
        if (_a === _b) { return 0; }
        if (_a > _b) { return 1; }
        return -1;
      })),
      map(g => g.map(g => ({
        key: g.key, objects: g.objects.sort((a, b) => {
          const _a = a.annotation.toLowerCase();
          const _b = b.annotation.toLowerCase();
          if (_a === _b) { return 0; }
          if (_a > _b) { return 1; }
          return -1;
        })
      })))
    );

    this.disableObjectTab$ = this.objects$.pipe(map(o => o.length === 0));

    this.sub.add(
      this.exhibitionMeta$.pipe(
        map(e => e ? e : { loadId: '404' }),
        pluck('loadId'),
        tap(id => {
          if (id === '404') {
            this.componentMayLoad = false;
          }
        })
      ).subscribe(
        // We use setTimeout here to make sure our callstack is cleared and the
        // templateRef for `this.dynamicContainer` is present, as it resides in a
        // conditional (*ngIf) block.
        loadId => {
          setTimeout(() => this.createComponent(loadId), 1);
        }
      ));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
