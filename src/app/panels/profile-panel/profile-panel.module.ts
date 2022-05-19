import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePanelComponent } from './profile-panel.component';
import { BadgeModule } from 'src/app/objects/badge/badge.module';



@NgModule({
  declarations: [
    ProfilePanelComponent
  ],
  imports: [
    CommonModule,
    BadgeModule
  ],
  exports: [
    ProfilePanelComponent
  ]
})
export class ProfilePanelModule { }
