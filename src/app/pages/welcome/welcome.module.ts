import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { Routes, RouterModule } from '@angular/router';
import { TopbarModule } from '../../utils/topbar';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
];

@NgModule({
  imports: [ 
    NzTypographyModule,
    RouterModule.forChild(routes),
    TopbarModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
