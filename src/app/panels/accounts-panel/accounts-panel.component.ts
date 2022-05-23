import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ngIfProfileAnimations } from 'src/app/animations';
import { AccountInfo } from 'src/app/classes/accountInfo';
import { ApiService } from 'src/app/services/api.service';
import { IsAccountService } from 'src/app/services/is-account.service';
import { SiteService } from 'src/app/services/site.service';
import { Web3Service } from 'src/app/services/web3.service';

@Component({
  selector: 'app-accounts-panel',
  templateUrl: './accounts-panel.component.html',
  styleUrls: ['./accounts-panel.component.scss'],
  animations: [
    ngIfProfileAnimations
  ]
})
export class AccountsPanelComponent implements OnInit {

  type!: string;
  listener!: Subscription;
  account!: AccountInfo;
  accounts: AccountInfo[] = [
    {
      accountId: '',
      walletAddress: '0x7f17c6Ebe682cc3d2bAbF3e2416f632110D7eaD1',
      bio: '',
      followers: 0,
      following: 0,
      avatarUri: '',
      bannerUri: '',
      borderUri: '',
      accessoryUri: '../../../assets/accessories/png/0.png',
      record: [],
      joinDate: '',
      reputation: 0,
      friends: []
    },
    {
      accountId: '',
      walletAddress: '0x7f17c6Ebe682cc3d2bAbF3e2416f632110D7eaD1',
      bio: '',
      followers: 0,
      following: 0,
      avatarUri: '',
      bannerUri: '',
      borderUri: '',
      accessoryUri: '',
      record: [],
      joinDate: '',
      reputation: 0,
      friends: []
    },
    {
      accountId: '',
      walletAddress: '0x7f17c6Ebe682cc3d2bAbF3e2416f632110D7eaD1',
      bio: '',
      followers: 0,
      following: 0,
      avatarUri: '',
      bannerUri: '',
      borderUri: '',
      accessoryUri: '',
      record: [],
      joinDate: '',
      reputation: 0,
      friends: []
    },
    {
      accountId: '',
      walletAddress: '0x7f17c6Ebe682cc3d2bAbF3e2416f632110D7eaD1',
      bio: '',
      followers: 0,
      following: 0,
      avatarUri: '',
      bannerUri: '',
      borderUri: '',
      accessoryUri: '',
      record: [],
      joinDate: '',
      reputation: 0,
      friends: []
    }
  ]
  viewing!: string;
  forcePageChange: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private APIservice: ApiService,
    private WEB3service: Web3Service,
    private SITEservice: SiteService,
    private isAccount: IsAccountService
  ) {
    this.listener = this.route.params.subscribe(async params => {
      this.forcePageChange = true;
      this.type = params['type'];
      console.log(this.type);
      if (this.type === 'followers' || this.type === 'following') {
        const response = await this.APIservice.getAccount(await this.SITEservice.viewing.getValue());
        console.log(response);
        if (this.isAccount.isAccount(response) && response.accountId !== undefined) {
          console.log(response);
          this.viewing = response.accountId;
          this.account = response;
          // let follower;
          // this.account.followerAddresses.forEach(async (followerAddress: string) => {
          //   follower = await this.APIservice.getAccount(followerAddress);
          //   if (this.isAccount.isAccount(follower))
          //   this.accounts.push(follower);
          // });
        }
      }
      this.forcePageChange = false;
    });
  }

  ngOnInit(): void {
  }

}
