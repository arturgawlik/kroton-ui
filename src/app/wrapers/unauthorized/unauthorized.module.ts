import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized.component';
import { UnAuthorizedRoutingModule } from './routing/unauthorized-routing.module';


@NgModule({
  declarations: [UnauthorizedComponent],
  imports: [
    CommonModule,
    UnAuthorizedRoutingModule
  ]
})
export class UnauthorizedModule { }
