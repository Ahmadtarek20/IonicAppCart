import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'product',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../product/product.module').then(m => m.ProductPageModule)
          }
        ]
      },
      {
        path: 'list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../list/list.module').then(m => m.ListPageModule)
          }
        ]
      },
      {
        path: 'categury',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../categury/categury.module').then(m => m.CateguryPageModule)
          }
        ]
      },
      {
        path: 'roduct-detalis',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../product-detalis/product-detalis.module').then(m => m.ProductDetalisPageModule)
          }
        ]
      },
      {
        path: 'product-cart',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../product-cart/product-cart.module').then(m => m.ProductCartPageModule)
          }
        ]
      },
      {
        path: 'register',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../register/register.module').then(m => m.RegisterPageModule)
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
