import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetalisPageRoutingModule } from './product-detalis-routing.module';

import { ProductDetalisPage } from './product-detalis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetalisPageRoutingModule
  ],
  declarations: [ProductDetalisPage]
})
export class ProductDetalisPageModule {}
