import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowWhenOneOfSizeDirective } from './showWhenOneOfSize/show-when-one-of-size.directive';



@NgModule({
  declarations: [
    ShowWhenOneOfSizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowWhenOneOfSizeDirective
  ]
})
export class DirectivesModule { }
