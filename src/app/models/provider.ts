import { Coordenadas } from './coordenadas';
export interface Proveedor {
    nombre: string;
    apellidos: string;
    correo: string;
    coordenadas: Coordenadas;
    foto: string;
    descripcion: string;
    fechaCreacion: firebase.firestore.Timestamp;
  }
