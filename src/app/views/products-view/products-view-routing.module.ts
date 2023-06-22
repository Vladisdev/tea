import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: ProductComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsViewRoutingModule {}
