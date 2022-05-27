import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitPipe } from './split/split.pipe';
import { SubgraphNamePipe } from './subgraph-name/subgraph-name.pipe';



@NgModule({
  declarations: [
    SplitPipe,
    SubgraphNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SplitPipe,
    SubgraphNamePipe
  ]
})
export class PipeModule { }
