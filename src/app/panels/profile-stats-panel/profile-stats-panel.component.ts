import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { User } from 'src/app/classes/user';
import { SiteService } from '../../services/site.service';
import { IsUserService } from 'src/app/is-user.service';

@Component({
  selector: 'app-profile-stats-panel',
  templateUrl: './profile-stats-panel.component.html',
  styleUrls: ['./profile-stats-panel.component.scss']
})
export class ProfileStatsPanelComponent implements OnInit, OnDestroy {

  requestedAddress: BehaviorSubject<string> = new BehaviorSubject<string>("");
  user!: User;
  listener!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private APIservice: ApiService,
    private SITEservice: SiteService,
    private isUser: IsUserService
    ) { }

  async ngOnInit(): Promise<void> {
    this.listener = this.route.params.subscribe(params => {
      this.requestedAddress.next(params['address']);
    });
    const response = await this.SITEservice.getUser(this.requestedAddress.getValue());
    if (this.isUser.isUser(response)) {
      this.user = response;
    }
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }
}
