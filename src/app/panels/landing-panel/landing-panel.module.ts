import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPanelComponent } from './landing-panel.component';
import { SplitModule } from 'src/app/pipes/split/split.module';



@NgModule({
  declarations: [
    LandingPanelComponent
  ],
  imports: [
    CommonModule,
    SplitModule
  ],
  exports: [
    LandingPanelComponent
  ]
})
export class LandingPanelModule { }
