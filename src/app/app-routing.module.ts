import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsPanelComponent } from './panels/notifications-panel/notifications-panel.component';
import { NotificationsPanelModule } from './panels/notifications-panel/notifications-panel.module';

const routes: Routes = [
  {path: '', component: NotificationsPanelComponent, outlet: "center"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NotificationsPanelModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
