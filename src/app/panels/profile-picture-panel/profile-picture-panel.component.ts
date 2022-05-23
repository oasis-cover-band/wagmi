import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { AccountInfo } from 'src/app/classes/accountInfo';
import { SiteService } from '../../services/site.service';
import { Web3Service } from 'src/app/services/web3.service';
import { IsAccountService } from 'src/app/services/is-account.service';
import { ngIfProfileAnimations } from 'src/app/animations';

@Component({
  selector: 'app-profile-picture-panel',
  templateUrl: './profile-picture-panel.component.html',
  styleUrls: ['./profile-picture-panel.component.scss'],
  animations: [
    ngIfProfileAnimations
  ]
})
export class ProfilePicturePanelComponent implements OnInit, OnDestroy {

  requestedAddress: BehaviorSubject<string> = new BehaviorSubject<string>("");
  myAddress!: BehaviorSubject<string>;
  listener!: Subscription;
  isFollowing!: boolean;
  account!: AccountInfo;
  forceProfileChange: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private APIservice: ApiService,
    private WEB3service: Web3Service,
    private SITEservice: SiteService,
    private isAccount: IsAccountService,
    private router: Router
    ) { }

  async ngOnInit(): Promise<void> {
    this.listener = this.route.params.subscribe(async params => {
      this.forceProfileChange = true;
      this.requestedAddress.next(params['address']);
      const response = await this.SITEservice.getAccount(this.requestedAddress.getValue());
      if (this.isAccount.isAccount(response)) {
        this.account = response;
      }
      this.forceProfileChange = false;
    });
    this.myAddress = this.WEB3service.loggedIn.walletAddress;
    this.isFollowing = this.APIservice.isAddressFollowingAddress(this.myAddress.getValue(), this.requestedAddress.getValue());
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }

  showEdit(): void {
    this.router.navigate([{outlets: {
      popup: ['edit-profile']
    }}]);
  }

  hideEdit(): void {

  }

  edit(): void {
    // this.APIservice.edit(this.myAddress.getValue(), {

    // });
  }

  follow(): void {
    this.APIservice.followAddress(this.myAddress.getValue(), this.requestedAddress.getValue());
  }

  unfollow(): void {
    this.APIservice.unfollowAddress(this.myAddress.getValue(), this.requestedAddress.getValue());
  }

}
