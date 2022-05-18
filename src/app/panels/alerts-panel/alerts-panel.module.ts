import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsPanelComponent } from './alerts-panel.component';
import { AlertModule } from 'src/app/objects/alert/alert.module';



@NgModule({
  declarations: [
    AlertsPanelComponent
  ],
  imports: [
    CommonModule,
    AlertModule
  ],
  exports: [
    AlertsPanelComponent
  ]
})
export class AlertsPanelModule { }
