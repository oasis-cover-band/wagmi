import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { AccountInfo } from 'src/app/classes/accountInfo';
import { SiteService } from '../../services/site.service';
import { IsAccountService } from 'src/app/is-account.service';
import { ngIfProfileAnimations } from 'src/app/animations';

@Component({
  selector: 'app-profile-stats-panel',
  templateUrl: './profile-stats-panel.component.html',
  styleUrls: ['./profile-stats-panel.component.scss'],
  animations: [
    ngIfProfileAnimations
  ]
})
export class ProfileStatsPanelComponent implements OnInit, OnDestroy {

  requestedAddress: BehaviorSubject<string> = new BehaviorSubject<string>("");
  account!: AccountInfo;
  listener!: Subscription;
  forceProfileChange: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private APIservice: ApiService,
    private SITEservice: SiteService,
    private isAccount: IsAccountService
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
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }
}
