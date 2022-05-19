import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { SiteService } from 'src/app/site.service';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss']
})
export class ProfilePanelComponent implements OnInit, OnDestroy {

  address: BehaviorSubject<string> = new BehaviorSubject<string>("");
  name!: string;
  tagline!: string;
  badges!: {
      icon: string,
      description: string
  }[];
  listener!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private APIservice: ApiService,
    private SITEservice: SiteService
    ) { }

  ngOnInit(): void {
    this.listener = this.route.params.subscribe(params => {
      this.address.next(params['address']);
    });
    this.SITEservice.viewing.next(this.address.getValue());

    this.name = this.APIservice.getAddressName(this.address.getValue());
    this.tagline = this.APIservice.getAddressTagline(this.address.getValue());
    this.badges = this.APIservice.getAddressBadges(this.address.getValue());
    this.SITEservice.currentRoute.next('profile/'.concat(this.address.getValue()));
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
    this.SITEservice.viewing.next('');
  }

}
