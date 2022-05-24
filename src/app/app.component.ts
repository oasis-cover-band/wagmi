import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ngIfBannerAnimations, centerRouterAnimations, leftRouterAnimations, rightRouterAnimations, popupRouterAnimations } from './animations';
import { ApiService } from './services/api.service';
import { AccountInfo } from './classes/accountInfo';
import { SiteService } from './services/site.service';
import { TimeService } from './services/time.service';
import { IsAccountService } from './services/is-account.service';
import { timeStamp } from 'console';
import { SubgraphService } from './services/subgraph.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    leftRouterAnimations,
    centerRouterAnimations,
    rightRouterAnimations,
    ngIfBannerAnimations,
    popupRouterAnimations
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'wagmi';
  listener!: Subscription;
  viewingAccount!: AccountInfo;
  viewing!: string;
  constructor(
    private TIMEservice: TimeService,
    private APIservice: ApiService,
    private route: ActivatedRoute,
    private SITEservice: SiteService,
    private isAccount: IsAccountService,
    private SUBGRAPHservice: SubgraphService,
    private router: Router
  ) {
    this.TIMEservice.start();
    this.listener = this.SITEservice.viewing.subscribe(async viewing => {
      this.viewing = viewing;
      
      const response = await this.APIservice.getAccount(viewing);
      if (this.isAccount.isAccount(response)) {
        this.viewingAccount = response;
        if (this.viewingAccount.bannerUri === '') {
          this.viewingAccount.bannerUri = `../assets/textures/` + Number(this.viewing) % 340 + `.png`
        }
    }
    });
    this.SITEservice.currentRoute.next('home');
    this.router.navigate([{outlets: {
      left: ['empty'],
      center: ['landing'],
      right: ['empty'],
      popup: ['empty'],
      popupAction: ['empty']
    }}])
  }

  async ngOnInit(): Promise<void> {
    this.SUBGRAPHservice.token("0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48");
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }
}
