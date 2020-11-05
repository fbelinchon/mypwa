
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { dateDataSortValue } from 'ionic-angular/util/datetime-util';
import { identifierModuleUrl } from '@angular/compiler';
import {DataService} from '../services/data.service';
import { LoadingController, AlertController} from '@ionic/angular';
import { Message } from '../models/message';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import * as firebase from 'firebase';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
import { NgZone } from '@angular/core';

// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';




@Component({
  selector: 'app-alta-mensaje',
  templateUrl: './alta-mensaje.page.html',
  styleUrls: ['./alta-mensaje.page.scss'],
})


export class AltaMensajePage implements OnInit {
  // private db: firebase.database.Reference;
  public latitude = 0;
  public longitude = 0;
  createMessageForm: FormGroup;
  //submitted = false;



  constructor(public angularFireDatabase: AngularFireDatabase,
              public dataservice: DataService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private formBuilder: FormBuilder,
              private zone: NgZone,
              public loadingController: LoadingController
              ) {
                

    // this.db = angularFireDatabase.database.ref('message');
   }

   refresh() {
    this.zone.run(() => {
      console.log('force update the screen');
    });
  }
  ngOnInit() {

    
    this.createMessageForm = this.formBuilder.group({
      fromName: new FormControl('value', Validators.required),
      subject: new FormControl('', Validators.required),
      date: ['', Validators.required],
      comment: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
    });

  
    console.log('ESTATUS ');
    // this.createMessageForm.markAllAsTouched();
    
  }

  ionViewWillEnter(){
    this.createMessageForm.enable();
    console.log('IONIC WILL ENTER');
  }
  ionViewDidEnter(){
    this.createMessageForm.enable();
    console.log('IONIC DID ENTER');
    this.refresh();
    // this.createMessageForm.markAllAsTouched();
  }


async createMessage() {

    const myMessage: Message = {
      fromName: this.createMessageForm.value.fromName,
      subject: this.createMessageForm.value.subject,
      // date : new Date(this.createMessageForm.value.date),
      date: firebase.firestore.Timestamp.fromDate(new Date(this.createMessageForm.value.date)),
      text : this.createMessageForm.value.comment,
      coordinates: {
        latitude : this.latitude,
        longitude: this.longitude
      }


      // id: ''
    };

    const loading = await this.loadingCtrl.create({
      message: 'espera a que se cree tu mensaje'
    });
    await loading.present();

    this.dataservice.crearMensajes(myMessage).then(() => {
      this.loadingCtrl.dismiss().then(() => {
        this.createMessageForm.reset();
        this.latitude = undefined;
        this.longitude = undefined;
      });
    }).catch(() => {
      console.log('ERROR Mensaje');
    });


  }

async getGPS() {

  const loading = await this.loadingCtrl.create({
    message: 'Espera a obtener tu GPS'
  });
  await loading.present();
  

  Plugins.Geolocation.getCurrentPosition({enableHighAccuracy: true,timeout: 10000}).then((coordinates) => {
    this.loadingCtrl.dismiss().then(() => {
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
      }).catch((error) =>  {
        console.log('ERROR GPS');
      });
  }).catch((error) => {
    console.log('Error getting location', error);
    this.loadingCtrl.dismiss();
    
    const alert = this.alertCtrl.create({
      header:'GPS',
      subHeader: 'No se puede utilizar el GPS',
      message:'Utilice el mapa para seleccionar su ubicación.',
      buttons:['OK']
    });
    alert.then(res => {
      res.present();
    })
  });
    /* await this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log('GPS: x:' + this.latitude + 'y:' + this.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     }); */

   /*  let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     }); */
  }
 /*  get registerFormControl() {
    return this.createMessageForm.controls;
  } */
}
