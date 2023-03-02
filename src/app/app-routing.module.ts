import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './views/layout.component';

let routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/main/main.module').then(m => m.MainModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./views/products-view/products-view.module').then(
            m => m.ProductsViewModule
          ),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./views/products-view/products-view.module').then(
            m => m.ProductsViewModule
          ),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./views/order/order.module').then(m => m.OrderModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
