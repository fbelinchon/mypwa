import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, throttleTime, mergeMap, scan, map } from 'rxjs/operators';

import { ImplementationModalPage } from '../implementation-modal/implementation-modal.page';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { Message } from '../models/message';


@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  public messages: Observable<Message[]>;
  constructor(private data: DataService, public modalController: ModalController,
              private routerOutlet: IonRouterOutlet) {}

  /*  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    // tslint:disable-next-line: no-trailing-whitespace
    }, 3010);
  }*/

  ngOnInit() {
    this.messages = this.data.getMessage().valueChanges({idField: 'id'});
  }

  async openImplModal() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ImplementationModalPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onDidDismiss().then((result) => { });

    return await modal.present();
  }

}
