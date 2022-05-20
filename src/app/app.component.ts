import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ngIfBannerAnimations, centerRouterAnimations, leftRouterAnimations, rightRouterAnimations, popupRouterAnimations } from './animations';
import { ApiService } from './api.service';
import { User } from './classes/user';
import { SiteService } from './site.service';
import { TimeService } from './time.service';

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
  user!: User;
  viewing!: string;
  constructor(
    private TIMEservice: TimeService,
    private APIservice: ApiService,
    private route: ActivatedRoute,
    private SITEservice: SiteService
  ) {
    this.TIMEservice.start();
    this.SITEservice.viewing.subscribe(async viewing => {
      this.viewing = viewing;
      this.user = await this.SITEservice.getUser(viewing);
      if (this.user.bannerUri === '') {
        this.user.bannerUri = `../assets/textures/` + Number(this.viewing) % 340 + `.png`
      }
    });
    this.SITEservice.currentRoute.next('home');

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  
  }
}
