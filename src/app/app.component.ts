import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ngIfAnimations, centerRouterAnimations, leftRouterAnimations, rightRouterAnimations } from './animations';
import { ApiService } from './api.service';
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
    ngIfAnimations
  ]
})
export class AppComponent implements OnDestroy {
  title = 'wagmi';
  address: BehaviorSubject<string> = new BehaviorSubject<string>('');
  listener!: Subscription;
  banner!: string;
  viewing!: string;
  constructor(
    private TIMEservice: TimeService,
    private APIservice: ApiService,
    private route: ActivatedRoute,
    private SITEservice: SiteService
  ) {
    this.TIMEservice.start();
    this.SITEservice.viewing.subscribe(viewing => {
      this.viewing = viewing;
      this.banner = this.APIservice.getAddressBanner(viewing);
    });

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  
  }
}
