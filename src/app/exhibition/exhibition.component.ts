import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'museum-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss']
})
export class ExhibitionComponent implements OnInit {

  private detailsVisibleSource = new Subject();

  exhibitionId$: Observable<string>;
  detailsVisible$ = this.detailsVisibleSource.asObservable();

  displayDetails() {
    this.detailsVisibleSource.next(true);
  }

  closeDetails() {
    this.detailsVisibleSource.next(false);
  }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.exhibitionId$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      tap(p => console.log(p))
    );
  }

}
