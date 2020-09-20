import { NgModule } from '@angular/core';

import { DirectivesModule } from '../../utils/directives';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

const ngImports = [
  DirectivesModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
];

const nzImports = [
  NzFormModule,
  NzButtonModule,
  NzInputModule,
  NzCardModule,
  NzTypographyModule,
  NzIconModule,
  NzAlertModule
];

const other3partyImports = [
  FlexLayoutModule,
];

const ownImports = [
  LoginRoutingModule,
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ...ngImports,
    ...nzImports,
    ...other3partyImports,
    ...ownImports
  ]
})
export class LoginModule { }
