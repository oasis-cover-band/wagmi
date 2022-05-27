import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PipeModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    PipeModule
  ],
  exports: [
    ChartComponent
  ]
})
export class ChartModule { }
