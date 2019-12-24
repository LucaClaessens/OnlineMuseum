import { Component, OnInit, HostBinding, ElementRef, OnDestroy, Input, HostListener } from '@angular/core';
import { fromEvent, Subscription, Observable } from 'rxjs';
import { debounceTime, buffer, map, filter, tap } from 'rxjs/operators';
import { AmphoraService } from '../amphora.service';

@Component({
  selector: 'museum-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnDestroy {

  @HostBinding('class.focused') focused = false;

  @Input() museum = 'Luca museum';
  // The trackId we have to filter our results on.
  @Input() trackId = 0;
  @Input() timeline: number[] = [];

  private sub = new Subscription();
  public displayId = true;

  public amphoraByYear$: Observable<Amphora[]>;

  toggleFocus() {
    this.focused = !this.focused;
    this.displayId = this.focused;
  }


  constructor(private hostRef: ElementRef, private amphoraService: AmphoraService) { }

  ngOnInit() {
    setTimeout(() => this.displayId = false, 5000);

    const el = this.hostRef.nativeElement;
    const click$ = fromEvent(el, 'click');
    const buff$ = click$.pipe(
      debounceTime(250),
    );
    const dblclick$ = click$.pipe(
      buffer(buff$),
      map(list => {
        return list.length;
      }),
      filter(x => x === 2)
    );
    this.sub.add(dblclick$.subscribe(() => this.toggleFocus()));

    this.amphoraByYear$ = this.amphoraService.amphoraList$.pipe(
      map(list => list.filter(a => a.trackId === this.trackId)),
      map((amphora) => this.timeline.map(y => amphora.find(a => a.timePeriod === y))),
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
