import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { AccountModule } from '../account/account.module';
import { ActionModule } from '../action/action.module';



@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    AccountModule,
    ActionModule
  ],
  exports: [
    NotificationComponent
  ]
})
export class NotificationModule { }
