import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePicturePanelComponent } from './profile-picture-panel.component';
import { AccountModule } from 'src/app/objects/account/account.module';
import { ActionModule } from 'src/app/objects/action/action.module';



@NgModule({
  declarations: [
    ProfilePicturePanelComponent
  ],
  imports: [
    CommonModule,
    AccountModule,
    ActionModule
  ],
  exports: [
    ProfilePicturePanelComponent
  ]
})
export class ProfilePicturePanelModule { }
