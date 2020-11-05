import { Coordenadas } from './coordenadas';

export interface Message {
    [x: string]: any;
    fromName: string;
    subject: string;
    text: string;
    date: firebase.firestore.Timestamp;
    // date: Date;
    coordinates: Coordenadas;
    id?: string;
  }
