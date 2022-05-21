import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { AccountInfo } from 'src/app/classes/account';
import { SiteService } from '../../services/site.service';
import { IsAccountService } from 'src/app/is-account.service';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss']
})
export class ProfilePanelComponent implements OnInit, OnDestroy {

  requestedAddress: BehaviorSubject<string> = new BehaviorSubject<string>("");
  listener!: Subscription;
  account!: AccountInfo;
  constructor(
    private route: ActivatedRoute,
    private SITEservice: SiteService,
    private isAccount: IsAccountService
    ) { }

  async ngOnInit(): Promise<void> {
    this.listener = this.route.params.subscribe(params => {
      this.requestedAddress.next(params['address']);
    });
    const response = await this.SITEservice.getAccount(this.requestedAddress.getValue());
    if (this.isAccount.isAccount(response)) {
      this.account = response;
    }
    this.SITEservice.viewing.next(this.requestedAddress.getValue());
    this.SITEservice.currentRoute.next('profile/'.concat(this.requestedAddress.getValue()));
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
    this.SITEservice.viewing.next('');
  }

}
