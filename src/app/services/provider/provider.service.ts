import { Injectable, Provider } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestoreCollection} from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Proveedor } from '../../models/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private db: firebase.database.Reference;
  // private messageList: AngularFireList<Message>;

  constructor(private dbfire: AngularFireDatabase, private firestore: AngularFirestore){
  }

  public getMessage(): AngularFirestoreCollection<Proveedor>{
    return this.firestore.collection('providers');

  }

  public getMessageById(id: string): AngularFirestoreDocument<Provider> {
    return this.firestore.collection('providers').doc<Provider>(id);
  }

  public crearProvider(provider: Proveedor): Promise<void>{
    const id = this.firestore.createId();
    // message.id = id;
    return this.firestore.doc(`providers/${id}`).set(provider);

  }
}
