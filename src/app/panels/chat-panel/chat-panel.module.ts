import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPanelComponent } from './chat-panel.component';
import { MessageModule } from 'src/app/objects/message/message.module';



@NgModule({
  declarations: [
    ChatPanelComponent
  ],
  imports: [
    CommonModule,
    MessageModule
  ]
})
export class ChatPanelModule { }
