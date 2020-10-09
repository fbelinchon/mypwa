import { Component, OnInit,ViewChild } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, throttleTime, mergeMap, scan, map } from 'rxjs/operators';

import { ImplementationModalPage } from '../implementation-modal/implementation-modal.page';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

 // @ViewChild(CdkVirtualScrollViewport, { static: true }) viewport: CdkVirtualScrollViewport;
  constructor(private data: DataService,public modalController: ModalController, 
    private routerOutlet: IonRouterOutlet) {}

  /*  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3010); 
  }*/
 
  getMessages(): Message[]{
    console.log('People GetMessage');
    return this.data.getMessages();
  }

  ngOnInit() {
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
