import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonasDetallePageRoutingModule } from './personas-detalle-routing.module';

import { PersonasDetallePage } from './personas-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonasDetallePageRoutingModule
  ],
  declarations: [PersonasDetallePage]
})
export class PersonasDetallePageModule {}
