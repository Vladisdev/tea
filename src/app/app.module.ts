import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { ProductsComponent } from './views/products-view/products/products.component';
import { OrderComponent } from './views/order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './shared/services/products.service';
import { ProductComponent } from './views/products-view/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './views/layout.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
