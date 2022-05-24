import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { SplitModule } from './pipes/split/split.module';
import { SiteService } from './services/site.service';
import { SidebarModule } from './sidebar/sidebar.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    SidebarModule,
    SplitModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [
    SiteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
