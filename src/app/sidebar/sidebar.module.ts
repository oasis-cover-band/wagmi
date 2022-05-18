import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { UserModule } from '../objects/user/user.module';
import { ActionModule } from '../objects/action/action.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    ActionModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
