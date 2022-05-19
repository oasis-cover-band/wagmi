import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePicturePanelComponent } from './profile-picture-panel.component';
import { UserModule } from 'src/app/objects/user/user.module';



@NgModule({
  declarations: [
    ProfilePicturePanelComponent
  ],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
    ProfilePicturePanelComponent
  ]
})
export class ProfilePicturePanelModule { }
