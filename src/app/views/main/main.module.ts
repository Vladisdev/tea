import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import {
  NgbAccordion,
  NgbPanel,
  NgbPanelContent,
} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    RouterModule,
    NgbAccordion,
    NgbPanel,
    NgbPanelContent,
  ],
  exports: [MainRoutingModule],
})
export class MainModule {}
