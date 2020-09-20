import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NotyficationsService } from '../notyfication/notyfications.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzNotificationModule,
    NzMessageModule
  ],
  providers: [
    NotyficationsService
  ]
})
export class NotyficationModule { }
