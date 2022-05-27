import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemLandingPanelComponent } from './item-landing-panel.component';
import { ChartModule } from 'src/app/objects/chart/chart.module';



@NgModule({
  declarations: [
    ItemLandingPanelComponent
  ],
  imports: [
    CommonModule,
    ChartModule
  ]
})
export class ItemLandingPanelModule { }
