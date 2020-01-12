import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AmphoraService {

  amphoraList$ = this.db.collection<Amphora>('amphora').valueChanges();
  footnotes$ = this.db.collection<AmphoraFootnote>('amphoraFootnotes').valueChanges();

  constructor(private db: AngularFirestore) { }
}
