import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  public getExhibitionMetadata = (id: string) => {
    return 'some great text!';
  }

  constructor() { }
}
