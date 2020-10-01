import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized.component';
import { UnAuthorizedRoutingModule } from './routing/unauthorized-routing.module';
import { TopbarModule } from 'src/app/utils/topbar';
import { FooterModule } from 'src/app/utils/footer';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [UnauthorizedComponent],
  imports: [
    CommonModule,
    UnAuthorizedRoutingModule,
    TopbarModule,
    FlexLayoutModule,
    FooterModule
  ]
})
export class UnauthorizedModule {
}
