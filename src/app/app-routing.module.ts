import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './views/layout.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';

let routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'main',
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
