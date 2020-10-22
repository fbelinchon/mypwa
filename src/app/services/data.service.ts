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
    return this.firestore.collection('message').doc(id);
  }

  public crearMensajes(message: Message): Promise<void>{
    const id = this.firestore.createId();
    // message.id = id;
    return this.firestore.doc(`message/${id}`).set(message);

  }
}
