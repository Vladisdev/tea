import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { ProductsService } from './shared/services/products.service';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './views/layout.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
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
