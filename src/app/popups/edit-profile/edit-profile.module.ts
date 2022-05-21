import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import { AccountModule } from '../../objects/account/account.module';
import { ActionModule } from '../../objects/action/action.module';



@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    AccountModule,
    ActionModule
  ],
  exports: [
    EditProfileComponent
  ]
})
export class EditProfileModule { }
