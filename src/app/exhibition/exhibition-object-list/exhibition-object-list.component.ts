import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ExhibitionService } from 'src/app/_services/exhibition/exhibition.service';

@Component({
  selector: 'museum-exhibition-object-list',
  templateUrl: './exhibition-object-list.component.html',
  styleUrls: ['./exhibition-object-list.component.scss']
})
export class ExhibitionObjectListComponent implements OnInit {
  imageData$: Observable<{ exhibitions: string[]; image: string; name: string; summary: string; id: string; }[]>;

  constructor(private exhibitionService: ExhibitionService) { }

  @Input() data$: Observable<ExhibitionMetadata & {id: string}>;

  ngOnInit() {
    this.imageData$ = this.data$.pipe(
      flatMap(exhibition => this.exhibitionService.fetchExhibitionObjects(exhibition.id))
    )
  }

}
