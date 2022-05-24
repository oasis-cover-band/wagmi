import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { AccountInfo } from 'src/app/classes/accountInfo';
import { SiteService } from '../../services/site.service';
import { Web3Service } from 'src/app/services/web3.service';
import { IsAccountService } from 'src/app/services/is-account.service';

@Component({
  selector: 'app-profile-picture-panel',
  templateUrl: './profile-picture-panel.component.html',
  styleUrls: ['./profile-picture-panel.component.scss']
})
export class ProfilePicturePanelComponent implements OnInit, OnDestroy {

  requestedAddress: BehaviorSubject<string> = new BehaviorSubject<string>("");
  myAddress: BehaviorSubject<string> = this.WEB3service.loggedIn.walletAddress;
  listener!: Subscription;
  isFollowing: BehaviorSubject<boolean | number> = new BehaviorSubject<boolean | number>(0);
  account!: AccountInfo;
  forceProfileChange: boolean = false;
  joinDate!: number;
  @HostBinding('class.hide') hide: boolean = false;
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
      const response = await this.APIservice.getAccount(this.requestedAddress.getValue());
      if (this.isAccount.isAccount(response)) {
        this.account = response;
        this.joinDate = new Date(String(this.account.joinDate)).getTime();
      }
      this.forceProfileChange = false;
    });
    this.isFollowing.next(await this.APIservice.isAddressFollowingAddress(this.myAddress.getValue(), this.requestedAddress.getValue()));
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

  async follow(): Promise<void> {
    this.APIservice.followAddress(this.myAddress.getValue(), this.requestedAddress.getValue()).then(async after => {
      this.isFollowing.next(await this.APIservice.isAddressFollowingAddress(this.myAddress.getValue(), this.requestedAddress.getValue()));
    });
  }

  async unfollow(): Promise<void> {
    this.APIservice.unfollowAddress(this.myAddress.getValue(), this.requestedAddress.getValue()).then(async after => {
      this.isFollowing.next(await this.APIservice.isAddressFollowingAddress(this.myAddress.getValue(), this.requestedAddress.getValue()));
    })
  }

}
