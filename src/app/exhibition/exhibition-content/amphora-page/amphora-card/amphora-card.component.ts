import { Component, OnInit, OnDestroy, Input, ElementRef, ViewChild } from '@angular/core';
import { Subscription, fromEvent, merge, timer } from 'rxjs';
import { mapTo, withLatestFrom, debounceTime, filter, map, scan, mergeMap, takeUntil, repeat } from 'rxjs/operators';
import { insertRemove } from './amphora-card.animation';

@Component({
  selector: 'museum-amphora-card',
  templateUrl: './amphora-card.component.html',
  styleUrls: ['./amphora-card.component.scss'],
  animations: [insertRemove]
})
export class AmphoraCardComponent implements OnInit, OnDestroy {

  @Input() amphora: Amphora;
  showAmphora = false;
  hideEmoji = true;

  @ViewChild('foreground', { static: true }) foreground: ElementRef;
  @ViewChild('background', { static: true }) background: ElementRef;

  private sub = new Subscription();

  constructor() { }

  ngOnInit() {
    const el = this.foreground.nativeElement;
    const move$ = fromEvent(el, 'mousemove');
    const enter$ = fromEvent(el, 'mouseenter');
    const leave$ = fromEvent(el, 'mouseleave');

    const entered$ = merge(
      enter$.pipe(mapTo(true)),
      leave$.pipe(mapTo(false))
    );
    const $hideEmoji = move$.pipe(
      withLatestFrom(entered$),
      debounceTime(300),
      filter(([_, b]) => b),
      mergeMap(() => timer(0, 2000)
        .pipe(
          mapTo(this.showAmphora)
        )),
      takeUntil(leave$),
      repeat()
    );

    this.sub.add(
      $hideEmoji.pipe(scan((a) => (!a), this.showAmphora)).subscribe(value => this.hideEmoji = value)
    );

    this.sub.add(
      enter$.subscribe(() => this.showAmphora = true)
    );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
