import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { ActionModule } from '../action/action.module';
import { AccountModule } from '../account/account.module';



@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    ActionModule,
    AccountModule
  ],
  exports: [
    NotificationComponent
  ]
})
export class NotificationModule { }
