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
import { LandingPanelModule } from './panels/landing-panel/landing-panel.module';
import { LandingPanelComponent } from './panels/landing-panel/landing-panel.component';
import { TokenPanelModule } from './panels/token-panel/token-panel.module';
import { TokenPanelComponent } from './panels/token-panel/token-panel.component';
import { ServiceBrandLandingPanelModule } from './panels/service-brand-landing-panel/service-brand-landing-panel.module';
import { ServiceBrandLandingPanelComponent } from './panels/service-brand-landing-panel/service-brand-landing-panel.component';
import { ServiceBrandPanelModule } from './panels/service-brand-panel/service-brand-panel.module';
import { ServiceBrandPanelComponent } from './panels/service-brand-panel/service-brand-panel.component';
import { GraphPanelModule } from './panels/graph-panel/graph-panel.module';
import { GraphPanelComponent } from './panels/graph-panel/graph-panel.component';
import { ServiceBrandBioPanelModule } from './panels/service-brand-bio-panel/service-brand-bio-panel.module';
import { ServiceBrandBioPanelComponent } from './panels/service-brand-bio-panel/service-brand-bio-panel.component';

const routes: Routes = [
  // ***************************
  // INITS
  // ***************************
  // INIT CENTER (EMPTY)
      // this.router.navigate([{outlets: {left: ['empty'], center: ['service-brand-landing', 'uniswap'], right: ['service-brand', 'uniswap']}}])

  {path: '', component: LandingPanelComponent, outlet: "center"},
  // INIT RIGHT (EMPTY)
  {path: '', component: EmptyComponent, outlet: "right"},
  // INIT LEFT (EMPTY)
  {path: '', component: EmptyComponent, outlet: "left"},
  // INIT POPUP (EMPTY)
  {path: '', component: EmptyComponent, outlet: "popup"},
  // INIT POPUP ACTION (EMPTY)
  {path: '', component: EmptyComponent, outlet: "popupAction"},
  // CENTER (LANDING)
  {path: 'landing', component: LandingPanelComponent, outlet: "center"},
  // CENTER (NOTIFICATIONS)
  {path: 'notifications', component: NotificationsPanelComponent, outlet: "center"},
  // RIGHT (ALERTS)
  {path: 'alerts', component: AlertsPanelComponent, outlet: "right"},
  // ***************************
  // SERVICES
  // ***************************
  // CENTER (SERVICE BRAND: 'UNISWAP', 'MOONISWAP')
  {path: 'service-brand-landing/:service', component: ServiceBrandLandingPanelComponent, outlet: "center"},
  // CENTER (GRAPH: '0x0.../0')
  {path: 'graph/:address/:type', component: GraphPanelComponent, outlet: "center"},
  // RIGHT (SERVICE BRAND: 'UNISWAP', 'MOONISWAP')
  {path: 'service-brand/:service', component: ServiceBrandPanelComponent, outlet: "right"},
  // LEFT (SERVICE BRAND: 'UNISWAP', 'MOONISWAP')
  {path: 'token/:address', component: TokenPanelComponent, outlet: "left"},
  // CENTER (SERVICE BRAND: 'UNISWAP', 'MOONISWAP')
  {path: 'service-brand-bio/:service', component: ServiceBrandBioPanelComponent, outlet: "left"},
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
    ChatPanelModule,
    LandingPanelModule,
    TokenPanelModule,
    ServiceBrandLandingPanelModule,
    ServiceBrandPanelModule,
    GraphPanelModule,
    ServiceBrandBioPanelModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
