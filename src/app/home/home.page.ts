import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ImplementationModalPage } from '../implementation-modal/implementation-modal.page';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, throttleTime, mergeMap, scan, map } from 'rxjs/operators';
import { Message } from '../models/message';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  messages: Message[];

  constructor(private data: DataService, public modalController: ModalController,
              private routerOutlet: IonRouterOutlet) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3010);
  }

  getMessages() {
    this.messages = [];

  }

  async openImplModal() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ImplementationModalPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,

    });

    modal.onDidDismiss().then((result) => { });

    return await modal.present();
  }

  ngOnInit() {
  }

}
