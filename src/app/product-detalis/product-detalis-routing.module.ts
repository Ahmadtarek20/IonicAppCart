import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetalisPage } from './product-detalis.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetalisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetalisPageRoutingModule {}
