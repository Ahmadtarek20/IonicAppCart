import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CateguryPageRoutingModule } from './categury-routing.module';

import { CateguryPage } from './categury.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CateguryPageRoutingModule
  ],
  declarations: [CateguryPage]
})
export class CateguryPageModule {}
