import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { AccountModule } from '../objects/account/account.module';
import { ActionModule } from '../objects/action/action.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AccountModule,
    ActionModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
