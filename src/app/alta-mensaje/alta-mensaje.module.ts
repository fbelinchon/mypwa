import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltaMensajePageRoutingModule } from './alta-mensaje-routing.module';

import { AltaMensajePage } from './alta-mensaje.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AltaMensajePageRoutingModule
  ],
  declarations: [AltaMensajePage]
})
export class AltaMensajePageModule {}
