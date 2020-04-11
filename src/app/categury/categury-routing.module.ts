import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CateguryPage } from './categury.page';

const routes: Routes = [
  {
    path: '',
    component: CateguryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CateguryPageRoutingModule {}
