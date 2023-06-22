import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthGuard, AuthService],
})
export class CoreModule {}
