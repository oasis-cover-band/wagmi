import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceBrandLandingPanelComponent } from './service-brand-landing-panel.component';
import { LinkBoxModule } from 'src/app/objects/link-box/link-box.module';



@NgModule({
  declarations: [
    ServiceBrandLandingPanelComponent
  ],
  imports: [
    CommonModule,
    LinkBoxModule
  ],
  exports: [
    ServiceBrandLandingPanelComponent
  ]
})
export class ServiceBrandLandingPanelModule { }
