import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonasDetallePage } from './personas-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PersonasDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonasDetallePageRoutingModule {}
