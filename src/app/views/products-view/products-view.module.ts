import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsViewRoutingModule } from './products-view-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductsViewRoutingModule,
    SharedModule,
    RouterModule,
  ],
  exports: [ProductsViewRoutingModule],
})
export class ProductsViewModule {}
