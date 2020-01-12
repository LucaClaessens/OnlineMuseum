import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  // --- PUBLIC FUNCTIONS ---
  preloadLatestCollection() {
    return this.db
      .collection('collections', ref => ref.where('active', '==', true))
      .get()
      .pipe(
        map(qs => {
          const doc = qs.docs[0];
          return {
            id: doc.id,
            ...doc.data() as CollectionMetadata
          };
        })
      )
      .toPromise();
  }

  fetchExhibition(collectionId: string, index: number) {

    return this.db
      .collection('exhibitions', ref => ref
        .where('collectionId', '==', collectionId)
        .where('exhibitionIndex', '==', index)
      )
      .get()
      .pipe(
        filter(qs => qs.docs && qs.docs.length > 0),
        map(qs => {
          const doc = qs.docs[0];
          return {
            id: doc.id,
            ...doc.data() as ExhibitionMetadata
          };
        })
      )
      .toPromise();
  }

  fetchExhibitionObjects(exhibitionId: string) {
    return this.db
      .collection('objects', ref => ref
        .where('exhibition', '==', exhibitionId)
      )
      .get()
      .pipe(
        map(qs => {
          return qs.docs.map(doc => ({
            id: doc.id,
            ...doc.data() as ObjectMetadataDb
          }));
        }),
        map(objects => objects.reduce((groups, object: ObjectMetadataDb) => {
          const { group } = object;
          const objectGroup = groups.find(g => g.key === group);
          if (!objectGroup) {
            groups.push({
              key: group,
              objects: [object]
            });
          } else {
            objectGroup.objects.push(object);
          }
          return groups;
        }, [] as ObjectMetadataGroup[]))
      ).toPromise();
  }

  constructor(private db: AngularFirestore) {
  }
}
