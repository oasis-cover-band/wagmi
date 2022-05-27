import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { PipeModule } from './pipes/pipes.module';
import { SiteService } from './services/site.service';
import { SidebarModule } from './sidebar/sidebar.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

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
    PipeModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [
    SiteService,
    DatePipe,
    PipeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
