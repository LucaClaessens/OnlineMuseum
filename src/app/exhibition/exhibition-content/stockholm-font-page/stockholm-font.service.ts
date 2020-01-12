import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StockholmFontService {

  modelList$ = this.db.collection<ModelResource>('modelResources')
    .valueChanges();

  constructor(private db: AngularFirestore) { }
}
