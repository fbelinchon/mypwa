import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { LoadingController, AlertController } from '@ionic/angular';
import { ProviderService } from '../services/provider/provider.service';
import { Proveedor } from '../models/provider';
const { Geolocation } = Plugins;
const { Camera } = Plugins;

@Component({
  selector: 'app-provider',
  templateUrl: './provider.page.html',
  styleUrls: ['./provider.page.scss'],
})
export class ProviderPage implements OnInit {
  public latitude = 0;
  public longitude = 0;
  createProviderForm: FormGroup;
  foto: string;
  foto2: string;
  foto3: string;

  constructor(
    public angularFireDatabase: AngularFireDatabase,
    public dataservice: ProviderService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.createProviderForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      comment: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });
  }

  async createProvider() {

    const myProveedor: Proveedor = {
      nombre: this.createProviderForm.controls.nombre.value,
      apellidos: this.createProviderForm.controls.apellidos.value,
      fechaCreacion: firebase.firestore.Timestamp.fromDate(new Date()),
      descripcion : this.createProviderForm.controls.comment.value,
      correo: this.createProviderForm.controls.correo.value,
      foto: 'foto',
      coordenadas: {
        latitude : this.latitude,
        longitude: this.longitude
      }


      // id: ''
    };

    const loading = await this.loadingCtrl.create({
      message: 'espera a que se cree tu mensaje'
    });
    await loading.present();

    this.dataservice.crearProvider(myProveedor).then(() => {
      this.loadingCtrl.dismiss().then(() => {
        this.createProviderForm.reset();
        this.latitude = undefined;
        this.longitude = undefined;
      });
    }).catch(() => {
      console.log('ERROR Mensaje');
    });


  }

  correo() {
    this.createProviderForm.get('correo');
  }
  nombre() {
    this.createProviderForm.get('nombre');
  }
  apellidos() {
    this.createProviderForm.get('apellidos');
  }
  comment() {
    this.createProviderForm.get('comment');
  }


  async getGPS() {
    const loading = await this.loadingCtrl.create({
      message: 'Espera a obtener tu GPS',
    });
    await loading.present();

    Geolocation.getCurrentPosition({ timeout: 10000 })
      .then((coordinates) => {
        this.loadingCtrl
          .dismiss()
          .then(() => {
            this.latitude = coordinates.coords.latitude;
            this.longitude = coordinates.coords.longitude;
          })
          .catch((error) => {
            this.loadingCtrl
          .dismiss().then(() => {
            console.log('ERROR GPS');
          });
        });
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.foto = capturedPhoto.path;
    this.foto2 = capturedPhoto.base64String;
    this.foto3 = capturedPhoto.webPath;
  }

  
}
