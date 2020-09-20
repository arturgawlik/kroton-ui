import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesModule } from '../../utils/directives';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: RegisterComponent },
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DirectivesModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    FlexLayoutModule,
    NzCardModule,
    NzTypographyModule,
    NzIconModule,
    NzAlertModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
