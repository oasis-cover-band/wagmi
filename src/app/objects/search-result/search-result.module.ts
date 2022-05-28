import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result.component';
import { ActionModule } from '../action/action.module';



@NgModule({
  declarations: [
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    ActionModule
  ],
  exports: [
    SearchResultComponent
  ]
})
export class SearchResultModule { }
