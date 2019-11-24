import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  public latestExhibitionIdx: number;
  public currentExhibitionIdx: number;

  // --- PRIVATE FUNCTIONS ---
  private getExhibitionCount() {
    return 15;
  }

  private fetchExhibition = (idx: number): { title: string, description: string } => {
    return {
      title: `${idx}: the title!`,
      description: `some beautiful text`
    };
  }

  // --- PUBLIC FUNCTIONS ---

  loadExhibition(idx) {
    this.currentExhibitionIdx = idx;
    return of(this.fetchExhibition(idx));
  }

  getNextIdx() {
    return this.currentExhibitionIdx === this.latestExhibitionIdx ? 0 : this.currentExhibitionIdx + 1;
  }

  getPrevIdx() {
    return this.currentExhibitionIdx === 0 ? this.latestExhibitionIdx : this.currentExhibitionIdx - 1;
  }


  constructor() {
    this.latestExhibitionIdx = this.getExhibitionCount();
    this.currentExhibitionIdx = this.latestExhibitionIdx;
  }
}
