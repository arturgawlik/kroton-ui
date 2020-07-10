import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthModule
  ],
  exports: [
    // AngularFireAuthModule
  ]
})
export class AuthModule { }
