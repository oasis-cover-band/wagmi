import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyModule } from './empty/empty.module';
import { EmptyComponent } from './empty/empty.component';
import { AlertsPanelComponent } from './panels/alerts-panel/alerts-panel.component';
import { AlertsPanelModule } from './panels/alerts-panel/alerts-panel.module';
import { NotificationsPanelComponent } from './panels/notifications-panel/notifications-panel.component';
import { NotificationsPanelModule } from './panels/notifications-panel/notifications-panel.module';
import { ProfilePanelComponent } from './panels/profile-panel/profile-panel.component';
import { ProfilePanelModule } from './panels/profile-panel/profile-panel.module';
import { ProfilePicturePanelComponent } from './panels/profile-picture-panel/profile-picture-panel.component';
import { ProfilePicturePanelModule } from './panels/profile-picture-panel/profile-picture-panel.module';
import { ProfileStatsPanelComponent } from './panels/profile-stats-panel/profile-stats-panel.component';
import { ProfileStatsPanelModule } from './panels/profile-stats-panel/profile-stats-panel.module';

const routes: Routes = [
  {path: '', component: EmptyComponent, outlet: "left"},
  {path: '', component: NotificationsPanelComponent, outlet: "center"},
  {path: 'notifications', component: NotificationsPanelComponent, outlet: "center"},
  {path: '', component: AlertsPanelComponent, outlet: "right"},
  {path: 'alerts', component: AlertsPanelComponent, outlet: "right"},
  {path: 'empty', component: EmptyComponent, outlet: "left"},
  {path: 'empty', component: EmptyComponent, outlet: "center"},
  {path: 'empty', component: EmptyComponent, outlet: "right"},
  {path: 'profile', component: ProfilePanelComponent, outlet: "center"},
  {path: 'profile/:address', component: ProfilePanelComponent, outlet: "center"},
  {path: 'profile-picture/:address', component: ProfilePicturePanelComponent, outlet: "left"},
  {path: 'profile-stats/:address', component: ProfileStatsPanelComponent, outlet: "right"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NotificationsPanelModule,
    AlertsPanelModule,
    ProfilePanelModule,
    ProfilePicturePanelModule,
    ProfileStatsPanelModule,
    EmptyModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
