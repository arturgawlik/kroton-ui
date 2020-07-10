import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';


@NgModule({
  imports: [WelcomeRoutingModule, NzTypographyModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
