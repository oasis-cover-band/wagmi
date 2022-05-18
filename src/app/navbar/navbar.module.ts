import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { UserModule } from '../objects/user/user.module';
import { ActionModule } from '../objects/action/action.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    ActionModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
