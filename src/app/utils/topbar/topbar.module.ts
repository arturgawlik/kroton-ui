import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzMenuModule
  ],
  exports: [
    TopbarComponent
  ]
})
export class TopbarModule { }
