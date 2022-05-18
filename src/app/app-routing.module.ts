import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsPanelComponent } from './panels/alerts-panel/alerts-panel.component';
import { AlertsPanelModule } from './panels/alerts-panel/alerts-panel.module';
import { NotificationsPanelComponent } from './panels/notifications-panel/notifications-panel.component';
import { NotificationsPanelModule } from './panels/notifications-panel/notifications-panel.module';

const routes: Routes = [
  {path: '', component: NotificationsPanelComponent, outlet: "center"},
  {path: '', component: AlertsPanelComponent, outlet: "right"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NotificationsPanelModule,
    AlertsPanelModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
