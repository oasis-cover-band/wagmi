import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceBrandLandingPanelComponent } from './service-brand-landing-panel.component';
import { LinkBoxModule } from 'src/app/objects/link-box/link-box.module';
import { SearchResultModule } from 'src/app/objects/search-result/search-result.module';



@NgModule({
  declarations: [
    ServiceBrandLandingPanelComponent
  ],
  imports: [
    CommonModule,
    LinkBoxModule,
    SearchResultModule
  ],
  exports: [
    ServiceBrandLandingPanelComponent
  ]
})
export class ServiceBrandLandingPanelModule { }
