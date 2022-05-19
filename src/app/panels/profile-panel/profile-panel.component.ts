import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/classes/user';
import { SiteService } from 'src/app/site.service';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss']
})
export class ProfilePanelComponent implements OnInit, OnDestroy {

  requestedAddress: BehaviorSubject<string> = new BehaviorSubject<string>("");
  listener!: Subscription;
  user!: User;
  constructor(
    private route: ActivatedRoute,
    private SITEservice: SiteService
    ) { }

  async ngOnInit(): Promise<void> {
    this.listener = this.route.params.subscribe(params => {
      this.requestedAddress.next(params['address']);
    });
    this.SITEservice.viewing.next(this.requestedAddress.getValue());
    this.user = await this.SITEservice.getUser(this.requestedAddress.getValue());

    this.SITEservice.currentRoute.next('profile/'.concat(this.requestedAddress.getValue()));
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
    this.SITEservice.viewing.next('');
  }

}
