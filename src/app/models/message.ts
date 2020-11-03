import { Coordinates } from './coordinates';

export interface Message {
    [x: string]: any;
    fromName: string;
    subject: string;
    text: string;
    date: firebase.firestore.Timestamp;
    //date: Date;
    coordinates: Coordinates;
    id?: string;
  }
