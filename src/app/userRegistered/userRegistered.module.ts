import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisteredPageRoutingModule } from './userRegistered-routing.module';

import { RegisteredPage } from './userRegistered.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisteredPageRoutingModule
  ],
  declarations: [RegisteredPage]
})
export class RegisteredPageModule {}
