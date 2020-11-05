import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderPageRoutingModule } from './provider-routing.module';

import { ProviderPage } from './provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProviderPageRoutingModule
  ],
  declarations: [ProviderPage]
})
export class ProviderPageModule {}
