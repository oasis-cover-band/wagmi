import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { UserModule } from '../user/user.module';
import { ActionModule } from '../action/action.module';



@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    ActionModule
  ],
  exports: [
    NotificationComponent
  ]
})
export class NotificationModule { }
