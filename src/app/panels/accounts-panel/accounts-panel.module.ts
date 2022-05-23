import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsPanelComponent } from './accounts-panel.component';
import { AccountModule } from 'src/app/objects/account/account.module';



@NgModule({
  declarations: [
    AccountsPanelComponent
  ],
  imports: [
    CommonModule,
    AccountModule
  ],
  exports: [
    AccountsPanelComponent
  ]
})
export class AccountsPanelModule { }
