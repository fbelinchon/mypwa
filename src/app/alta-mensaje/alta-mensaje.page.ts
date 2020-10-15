
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { dateDataSortValue } from 'ionic-angular/util/datetime-util';
import { identifierModuleUrl } from '@angular/compiler';
import {DataService} from '../services/data.service';
import { LoadingController, AlertController} from '@ionic/angular';
import { Message } from '../models/message';


@Component({
  selector: 'app-alta-mensaje',
  templateUrl: './alta-mensaje.page.html',
  styleUrls: ['./alta-mensaje.page.scss'],
})


export class AltaMensajePage implements OnInit {
  private db: firebase.database.Reference;
  constructor(private angularFireDatabase: AngularFireDatabase,
              private dataservice: DataService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {

    this.db = angularFireDatabase.database.ref('message');
   }

  ngOnInit() {
  }

  async createMessage(fromName, subject, date, text){
    const myMessage: Message = {
      fromName: fromName.value,
      subject: subject.value,
      date : date.value,
      text : text.value
    };

    const loading = this.loadingCtrl.create();
    this.dataservice.crearMensajes(myMessage).then(() => {
      this.loadingCtrl.dismiss().then(() => {
        console.log('OK');
      });
    }).catch(() => {
      console.log('OK');
    });


  }
}
