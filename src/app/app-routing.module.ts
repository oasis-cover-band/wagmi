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
import { EditProfileModule } from './popups/edit-profile/edit-profile.module';
import { EditProfileComponent } from './popups/edit-profile/edit-profile.component';
import { AccountsPanelModule } from './panels/accounts-panel/accounts-panel.module';
import { AccountsPanelComponent } from './panels/accounts-panel/accounts-panel.component';
import { ImagePickerModule } from './popup-actions/image-picker/image-picker.module';
import { ImagePickerComponent } from './popup-actions/image-picker/image-picker.component';
import { ChatPanelModule } from './panels/chat-panel/chat-panel.module';
import { ChatPanelComponent } from './panels/chat-panel/chat-panel.component';

const routes: Routes = [
  // ***************************
  // INITS
  // ***************************
  // INIT CENTER (NOTIFICATIONS)
  {path: '', component: NotificationsPanelComponent, outlet: "center"},
  {path: 'notifications', component: NotificationsPanelComponent, outlet: "center"},
  // INIT RIGHT (ALERTS)
  {path: '', component: AlertsPanelComponent, outlet: "right"},
  {path: 'alerts', component: AlertsPanelComponent, outlet: "right"},
  // INIT POPUP (EMPTY)
  {path: '', component: EmptyComponent, outlet: "popup"},
  // INIT LEFT (EMPTY)
  {path: '', component: EmptyComponent, outlet: "left"},
  // INIT POPUP ACTION (EMPTY)
  {path: '', component: EmptyComponent, outlet: "popupAction"},
  
  // ***************************
  // PROFILE
  // ***************************
  {path: 'profile/:address', component: ProfilePanelComponent, outlet: "center"},
  {path: 'profile-picture/:address', component: ProfilePicturePanelComponent, outlet: "left"},
  {path: 'profile-stats/:address', component: ProfileStatsPanelComponent, outlet: "right"},
  {path: 'notifications/:address', component: NotificationsPanelComponent, outlet: "center"},
  {path: 'accounts/:type', component: AccountsPanelComponent, outlet: "center"},
  {path: 'accounts/:type', component: AccountsPanelComponent, outlet: "center"},
  {path: 'chat/:address', component: ChatPanelComponent, outlet: "center"},
  
  // ***************************
  // EDIT PROFILE
  // ***************************
  // POPUP
  {path: 'edit-profile', component: EditProfileComponent, outlet: "popup"},
  // INIT POPUP ACTION (EMPTY)
  {path: 'edit-profile/:type', component: ImagePickerComponent, outlet: "popupAction"},
  // ***************************
  // EMPTIES
  // ***************************
  // EMPTY LEFT
  {path: 'empty', component: EmptyComponent, outlet: "left"},
  // EMPTY CENTER
  {path: 'empty', component: EmptyComponent, outlet: "center"},
  // EMPTY RIGHT
  {path: 'empty', component: EmptyComponent, outlet: "right"},
  // EMPTY POPUP
  {path: 'empty', component: EmptyComponent, outlet: "popup"},
  // EMPTY POPUP
  {path: 'empty', component: EmptyComponent, outlet: "popupAction"},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NotificationsPanelModule,
    AlertsPanelModule,
    ProfilePanelModule,
    ProfilePicturePanelModule,
    ProfileStatsPanelModule,
    EditProfileModule,
    AccountsPanelModule,
    EmptyModule,
    ImagePickerModule,
    ChatPanelModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
