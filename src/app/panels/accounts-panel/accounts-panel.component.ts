import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ngIfProfileAnimations } from 'src/app/animations';
import { AccountInfo } from 'src/app/classes/accountInfo';
import { FollowInfo } from 'src/app/classes/followInfo';
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
  accountsList!: FollowInfo[] | number;
  accounts: AccountInfo[] = [];
  viewing!: string;
  @HostBinding('class.hide') hide: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private APIservice: ApiService,
    private WEB3service: Web3Service,
    private SITEservice: SiteService,
    private isAccount: IsAccountService
  ) {
    this.listener = this.route.params.subscribe(async params => {
      this.accounts = [];
      this.hide = true;
      setTimeout(() => {
        this.hide = false;
      }, 500);
      this.type = params['type'];
      if (this.type === 'followers' || this.type === 'following') {
        const response = await this.APIservice.getAccount(await this.SITEservice.viewing.getValue());
        if (this.isAccount.isAccount(response) && response.accountId !== undefined) {
          this.viewing = response.accountId;
          this.account = response;
          let follower;
          if (this.type === 'following') {
            this.accountsList = await this.APIservice.following(String(response.walletAddress));
            if (this.accountsList !== undefined && this.accountsList instanceof Array) {
              this.accountsList.forEach(async (account: FollowInfo) => {
                follower = await this.APIservice.getAccount(account.followingAddress);
                if (this.isAccount.isAccount(follower))
                this.accounts.push(follower);
              });
            }
          } else if (this.type === 'followers') {
            this.accountsList = await this.APIservice.followers(String(response.walletAddress));
            if (this.accountsList !== undefined && this.accountsList instanceof Array) {
              this.accountsList.forEach(async (account: FollowInfo) => {
                follower = await this.APIservice.getAccount(account.followerAddress);
                if (this.isAccount.isAccount(follower))
                this.accounts.push(follower);
              });
            }
          }
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
