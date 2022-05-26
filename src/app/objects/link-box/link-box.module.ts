import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkBoxComponent } from './link-box.component';
import { ActionModule } from '../action/action.module';



@NgModule({
  declarations: [
    LinkBoxComponent
  ],
  imports: [
    CommonModule,
    ActionModule
  ],
  exports: [
    LinkBoxComponent
  ]
})
export class LinkBoxModule { }
