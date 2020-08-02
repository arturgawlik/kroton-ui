import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DirectivesModule } from '../../utils/directives';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
];

@NgModule({
  imports: [ 
    NzTypographyModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    NzButtonModule,
    DirectivesModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
