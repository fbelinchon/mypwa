
export interface Message {
    fromName: string;
    subject: string;
    text: string;
    date: firebase.firestore.Timestamp;
    latitude: number;
    longitude: number;
  }
