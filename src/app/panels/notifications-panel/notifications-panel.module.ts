import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsPanelComponent } from './notifications-panel.component';
import { NotificationModule } from 'src/app/objects/notification/notification.module';



@NgModule({
  declarations: [
    NotificationsPanelComponent
  ],
  imports: [
    CommonModule,
    NotificationModule
  ],
  exports: [
    NotificationsPanelComponent
  ]
})
export class NotificationsPanelModule { }
