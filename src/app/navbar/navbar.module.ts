import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AccountModule } from '../objects/account/account.module';
import { ActionModule } from '../objects/action/action.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AccountModule,
    ActionModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
