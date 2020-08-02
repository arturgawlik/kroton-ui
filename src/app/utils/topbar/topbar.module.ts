import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
// import { HomeFill } from '@ant-design/icons-angular/icons';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { DirectivesModule } from '../directives';


@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzMenuModule,
    FlexLayoutModule,
    RouterModule,
    NzIconModule,
    NzDropDownModule,
    DirectivesModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
