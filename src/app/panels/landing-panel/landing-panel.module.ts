import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPanelComponent } from './landing-panel.component';
import { PipeModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    LandingPanelComponent
  ],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports: [
    LandingPanelComponent
  ]
})
export class LandingPanelModule { }
