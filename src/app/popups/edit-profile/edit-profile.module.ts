import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import { UserModule } from 'src/app/objects/user/user.module';
import { ActionModule } from 'src/app/objects/action/action.module';



@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    ActionModule
  ],
  exports: [
    EditProfileComponent
  ]
})
export class EditProfileModule { }
