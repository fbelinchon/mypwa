import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaMensajePage } from './alta-mensaje.page';

const routes: Routes = [
  {
    path: '',
    component: AltaMensajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaMensajePageRoutingModule {}
