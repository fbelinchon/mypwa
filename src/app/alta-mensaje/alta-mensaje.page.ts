
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { dateDataSortValue } from 'ionic-angular/util/datetime-util';
import { identifierModuleUrl } from '@angular/compiler';
import {DataService} from '../services/data.service';
import { LoadingController, AlertController} from '@ionic/angular';
import { Message } from '../models/message';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import { Geolocation } from '@ionic-native/geolocation/ngx';
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
  public createMessageForm: FormGroup;



  constructor(public angularFireDatabase: AngularFireDatabase,
              public dataservice: DataService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              formBuilder: FormBuilder,
              private geolocation: Geolocation,
              // private camera: Camera,
              public loadingController: LoadingController
              ) {
    this.createMessageForm = formBuilder.group({
      fromName : ['', Validators.required],
      subject: ['', Validators.required],
      date: ['', Validators.required],
      comment: ['', Validators.required],
    });
    // this.db = angularFireDatabase.database.ref('message');
   }

ngOnInit() {
  }

async createMessage() {

    const myMessage: Message = {
      fromName: this.createMessageForm.value.fromName,
      subject: this.createMessageForm.value.subject,
      // date : this.createMessageForm.value.date,
      date: firebase.firestore.Timestamp.fromDate(new Date(this.createMessageForm.value.date)),
      text : this.createMessageForm.value.comment,
      latitude : this.latitude,
      longitude: this.longitude
      // id: ''
    };

    const loading = await this.loadingCtrl.create({
      message: 'espera a que se cree tu mensaje'
    });
    await loading.present();

    this.dataservice.crearMensajes(myMessage).then(() => {
      this.loadingCtrl.dismiss().then(() => {
        this.createMessageForm.reset();
        this.latitude = 0;
        this.longitude = 0;
      });
    }).catch(() => {
      console.log('ERROR Mensaje');
    });


  }

async getGPS() {
    await this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log('GPS: x:' + this.latitude + 'y:' + this.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

   /*  let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     }); */
  }

  async takePicture(){

    /* const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then((imageData) => {
      console.log('Picture ' + imageData);
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      console.log('Error ' + err);
     }); */
  }

  changeListener($event): void {
    const file = $event.target.files[0];
    const reader = new FileReader();
    console.log('file ' + $event.target.files[0].path);
  }

}
