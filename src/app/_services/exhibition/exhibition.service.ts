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

  // TODO: make exhibition data based on firebase, enable navigation between exhibitions
  private fetchExhibition = (idx: number): ExhibitionMetadata => {
    return {
      description: `Almost everyone has a hoodie. You come across the hoodie on the street, on sports fields
      and along the line, on the catwalk, in the office or in the workshop. For some people it is
      nothing more than an easy and comfortable item of clothing, while for others the hoodie is
      accompanied by all kinds of inevitable social and cultural connotations. You could even say
      that this is the last political item of clothing in Western fashion. In the exhibition The Hoodie
      by writer and curator Lou Stoppard , the hoodie as a ‘storyteller’ is central, as the bearer of
      the most diverse meanings.
      In the shape as we know it today, the hoodie was already a huge success in the 1930s
      thanks to the Champion brand, which offered workmen a practical solution to cold and rain.
      Nowadays the sweater evokes a whole range of possible emotions such as fear, jealousy,
      companionship and even anger. In extreme cases, it can even cost you life if you wear one.
      Depending on gender, age, behavior, ethnicity and place in the world of who wears it - and
      the prejudices and political views of the viewer - the hoodie represents countless messages,
      ideas and nuances. Based on the specific context, the hoodie can be dull or iconic, civil or
      rebellious, offer a safe escape or provoke aggression, offer invisibility and privacy or make a
      pronounced statement.`,
      subsections: [{
        header: 'Some subsection header',
        body: 'Subsection body'
      }]
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
