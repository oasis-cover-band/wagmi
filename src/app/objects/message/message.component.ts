import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() data!: Message;
  @HostBinding('class.sender') @Input() sender!: boolean;
  messageTime!: number;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data.messageTime);
    this.messageTime = new Date(String(this.data.messageTime)).getTime();
    console.log(this.messageTime);
  }

}
