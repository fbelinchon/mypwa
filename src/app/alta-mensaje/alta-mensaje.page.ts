import { Message } from './../services/data.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { dateDataSortValue } from 'ionic-angular/util/datetime-util';
import { identifierModuleUrl } from '@angular/compiler';
import {DataService} from '../services/data.service'


@Component({
  selector: 'app-alta-mensaje',
  templateUrl: './alta-mensaje.page.html',
  styleUrls: ['./alta-mensaje.page.scss'],
})


export class AltaMensajePage implements OnInit {
  private db : firebase.database.Reference
  constructor(private angularFireDatabase:AngularFireDatabase,private dataservice: DataService) {
    
    this.db =angularFireDatabase.database.ref('message')
   }

  ngOnInit() {
  }

  createMessage(_fromName,_subject,_date,_id,_read){
    const myMessage: Message ={
      fromName: _fromName.value,
      subject: _subject.value,
      date : _date.value,
      id: _id.value,
      read: _read.value
    }
    console.log(myMessage);
    this.dataservice.crearMensajes(myMessage)
   
   
  }

}
