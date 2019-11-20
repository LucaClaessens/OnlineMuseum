import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

@Component({
  selector: 'museum-exhibition-details',
  templateUrl: './exhibition-details.component.html',
  styleUrls: ['./exhibition-details.component.scss']
})
export class ExhibitionDetailsComponent implements OnInit {

  @Output() exit = new EventEmitter();
  focus$: Observable<string>;

  closeDetails() {
    this.exit.emit();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  setFocus(focus: string) {
    const queryParams: Params = { focus };

    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling: 'merge'
      });
  }

  ngOnInit() {
    this.focus$ = this.route.queryParams.pipe(
      pluck<any, string>('focus'),
      map(focus => focus || 'text')
    );
  }

}
