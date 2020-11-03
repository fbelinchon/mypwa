import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestoreCollection} from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Message } from '../models/message';

// import {} from '@firebase/database';





@Injectable({
  providedIn: 'root'
})

export class DataService {
  private db: firebase.database.Reference;
  // private messageList: AngularFireList<Message>;

  constructor(private dbfire: AngularFireDatabase, private firestore: AngularFirestore){
  }

  public getMessage(): AngularFirestoreCollection<Message>{
    return this.firestore.collection('message');

  }

  public getMessageById(id: string): AngularFirestoreDocument<Message> {
    return this.firestore.collection('message').doc<Message>(id);
  }

  public crearMensajes(message: Message): Promise<void>{
    const id = this.firestore.createId();
    // message.id = id;
    return this.firestore.doc(`message/${id}`).set(message);

  }

  public static convertDate(firebaseObject: any) {
    if (!firebaseObject) return null;

    for (const [key, value] of Object.entries(firebaseObject)) {

      // covert items inside array
      if (value && Array.isArray(value) )
        firebaseObject[key] = value.map(item => this.convertDate(item));

      // convert inner objects
      if (value && typeof value === 'object' ){
        firebaseObject[key] = this.convertDate(value);
      }

      // convert simple properties
      if (value && value.hasOwnProperty('seconds'))
        firebaseObject[key] = (value as firebase.firestore.Timestamp).toDate();
    }
    return firebaseObject;
  }
}
