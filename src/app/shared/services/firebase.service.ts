import { Injectable } from '@angular/core';
import { doc, Firestore, increment, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  async updateAction() {
    const userDocRef = doc(this.firestore, 'loader', 'action');

    await updateDoc(userDocRef, {
      numero_de_acciones: increment(1),
    });
  }
}
