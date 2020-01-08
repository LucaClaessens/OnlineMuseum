import { Component, OnInit, OnDestroy, Input, ElementRef, ViewChild, HostBinding } from '@angular/core';
import { Subscription, fromEvent, merge, timer } from 'rxjs';
import { mapTo, withLatestFrom, debounceTime, filter, scan, mergeMap, takeUntil, repeat, take, tap, pairwise, startWith } from 'rxjs/operators';
import { insertRemove, insertRemoveAmphora } from './amphora-card.animation';

@Component({
  selector: 'museum-amphora-card',
  templateUrl: './amphora-card.component.html',
  styleUrls: ['./amphora-card.component.scss'],
  animations: [insertRemove, insertRemoveAmphora]
})
export class AmphoraCardComponent implements OnInit, OnDestroy {

  @Input() amphora: Amphora;
  showAmphora = false;
  hideEmoji = true;

  @HostBinding('@insertRemove') get getInserRemoveAnimation(): boolean {
    return true;
  }
  @ViewChild('foreground', { static: true }) foreground: ElementRef;
  @ViewChild('background', { static: true }) background: ElementRef;

  private sub = new Subscription();

  constructor() { }

  ngOnInit() {

    const el = this.foreground.nativeElement;
    const move$ = fromEvent(el, 'mousemove');
    const enter$ = fromEvent(el, 'mouseenter');
    const leave$ = fromEvent(el, 'mouseleave');

    const inside$ = merge(
      enter$.pipe(mapTo(true)),
      leave$.pipe(mapTo(false))
    );

    const triggerAnimationSequence$ = move$.pipe(
      debounceTime(250),
      withLatestFrom(inside$.pipe(startWith(false), pairwise())),
      filter(([_, [p, c]]) => p === false && p !== c));

    const $hideEmoji = triggerAnimationSequence$.pipe(
      mergeMap(() => timer(0, 2000)
        .pipe(
          mapTo(this.showAmphora),
        )),
      takeUntil(inside$.pipe(filter((e) => e === false))),
      repeat()
    );

    this.sub.add(
      $hideEmoji.pipe(scan((a) => (!a), this.showAmphora)).subscribe(value => this.hideEmoji = value)
    );

    this.sub.add(
      enter$.pipe(take(1)).subscribe(() => this.showAmphora = true)
    );

    this.sub.add(
      leave$.pipe(debounceTime(500)).subscribe(() => this.hideEmoji = false)
    );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
