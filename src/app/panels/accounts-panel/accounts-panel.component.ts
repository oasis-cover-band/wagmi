import { Component, OnInit } from '@angular/core';
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
  forcePageChange: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private APIservice: ApiService,
    private WEB3service: Web3Service,
    private SITEservice: SiteService,
    private isAccount: IsAccountService
  ) {
    this.listener = this.route.params.subscribe(async params => {
      this.accounts = [];
      this.forcePageChange = true;
      this.type = params['type'];
      console.log(this.type);
      if (this.type === 'followers' || this.type === 'following') {
        const response = await this.APIservice.getAccount(await this.SITEservice.viewing.getValue());
        console.log(response);
        if (this.isAccount.isAccount(response) && response.accountId !== undefined) {
          this.viewing = response.accountId;
          this.account = response;
          if (this.type === 'following') {
            this.accountsList = await this.APIservice.following(String(response.walletAddress));
          }
          let follower;
          if (this.accountsList !== undefined && this.accountsList instanceof Array) {
            this.accountsList.forEach(async (account: FollowInfo) => {
              follower = await this.APIservice.getAccount(account.followingAddress);
              if (this.isAccount.isAccount(follower))
              this.accounts.push(follower);
            });
          }
        }
      }
      this.forcePageChange = false;
    });
  }

  ngOnInit(): void {
  }

}
