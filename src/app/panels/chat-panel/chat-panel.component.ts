import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AccountInfo } from 'src/app/classes/accountInfo';
import { Chat } from 'src/app/classes/chat';
import { ApiService } from 'src/app/services/api.service';
import { IsAccountService } from 'src/app/services/is-account.service';
import { Web3Service } from 'src/app/services/web3.service';

@Component({
  selector: 'app-chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.scss']
})
export class ChatPanelComponent implements OnInit, OnDestroy {

  requestedAddress: BehaviorSubject<string> = new BehaviorSubject<string>("");
  listener!: Subscription;
  talkingTo!: AccountInfo;
  myAccount!: AccountInfo;
  myAddress!: BehaviorSubject<string>;
  forceProfileChange: boolean = false;
  chat!: Chat;

  constructor(
    private APIservice: ApiService,
    private WEB3service: Web3Service,
    private route: ActivatedRoute,
    private isAccount: IsAccountService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    document.body.style.background = "#131313";
    this.listener = this.route.params.subscribe(async params => {
      this.forceProfileChange = true;
      this.requestedAddress.next(params['address']);
      const response = await this.APIservice.getAccount(this.requestedAddress.getValue());
      this.myAddress = await this.WEB3service.loggedIn.walletAddress;
      
      this.chat =
      {
        walletAddress0: this.requestedAddress.getValue(),
        walletAddress1: this.myAddress.getValue(),
        messages: [
          {
            messageAttachments: [],
            messageContent: 'We need to talk.',
            senderAddress: this.myAddress.getValue(),
            recipientAddress: this.requestedAddress.getValue(),
            messageTime: String(new Date())
          },
          {
            messageAttachments: [],
            messageContent: 'We need to talk.',
            senderAddress: this.requestedAddress.getValue(),
            recipientAddress: this.myAddress.getValue(),
            messageTime: String(new Date())
          },
          {
            messageAttachments: [],
            messageContent: 'We need to talk.',
            senderAddress: this.requestedAddress.getValue(),
            recipientAddress: this.myAddress.getValue(),
            messageTime: String(new Date())
          },
          {
            messageAttachments: [],
            messageContent: 'We need to talk.',
            senderAddress: this.myAddress.getValue(),
            recipientAddress: this.requestedAddress.getValue(),
            messageTime: String(new Date())
          },
          {
            messageAttachments: [],
            messageContent: 'We need to talk.',
            senderAddress: this.myAddress.getValue(),
            recipientAddress: this.requestedAddress.getValue(),
            messageTime: String(new Date())
          },
          {
            messageAttachments: [],
            messageContent: 'We need to talk.',
            senderAddress: this.requestedAddress.getValue(),
            recipientAddress: this.myAddress.getValue(),
            messageTime: String(new Date())
          },
          {
            messageAttachments: [],
            messageContent: 'We need to talk.',
            senderAddress: this.myAddress.getValue(),
            recipientAddress: this.requestedAddress.getValue(),
            messageTime: String(new Date())
          },
          {
            messageAttachments: [],
            messageContent: 'We need to talk.',
            senderAddress: this.myAddress.getValue(),
            recipientAddress: this.requestedAddress.getValue(),
            messageTime: String(new Date())
          },
          {
            messageAttachments: [],
            messageContent: 'We need to talk.',
            senderAddress: this.requestedAddress.getValue(),
            recipientAddress: this.myAddress.getValue(),
            messageTime: String(new Date())
          }
        ]
      };
      // const chatResponse = await this.APIservice.getChat(this.myAddress.getValue(), this.requestedAddress.getValue());
      if (this.isAccount.isAccount(response)) {
        this.talkingTo = response;
      }
      this.forceProfileChange = false;
    });
  }

  ngOnDestroy(): void {
    document.body.style.background = "#202020";
  }

}
