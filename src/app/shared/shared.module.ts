import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from './pipes/price.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PricePipe],
  imports: [CommonModule, RouterModule],
  exports: [PricePipe],
})
export class SharedModule {}
