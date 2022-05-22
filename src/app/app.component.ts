import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ngIfBannerAnimations, centerRouterAnimations, leftRouterAnimations, rightRouterAnimations, popupRouterAnimations } from './animations';
import { ApiService } from './services/api.service';
import { AccountInfo } from './classes/accountInfo';
import { SiteService } from './services/site.service';
import { TimeService } from './services/time.service';
import { IsAccountService } from './is-account.service';

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
export class AppComponent implements OnDestroy {
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
    private router: Router
  ) {
    this.TIMEservice.start();
    this.SITEservice.viewing.subscribe(async viewing => {
      console.log(viewing);
      this.viewing = viewing;
      
      const response = await this.SITEservice.getAccount(viewing);
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
      center: ['notifications'],
      right: ['alerts'],
      popup: ['empty'],
      popupAction: ['empty']
    }}])

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  
  }
}
