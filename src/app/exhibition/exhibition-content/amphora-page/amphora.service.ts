import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AmphoraService {

  amphoraList$ = this.db.collection<Amphora>('amphora').valueChanges();

  constructor(private db: AngularFirestore) { }
}
