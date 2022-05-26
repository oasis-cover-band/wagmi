import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceBrandPanelComponent } from './service-brand-panel.component';
import { ActionModule } from 'src/app/objects/action/action.module';



@NgModule({
  declarations: [
    ServiceBrandPanelComponent
  ],
  imports: [
    CommonModule,
    ActionModule
  ],
  exports: [
    ServiceBrandPanelComponent
  ]
})
export class ServiceBrandPanelModule { }
