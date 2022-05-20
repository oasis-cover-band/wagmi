import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { User } from 'src/app/classes/user';
import { LoggedInService } from 'src/app/logged-in.service';
import { SiteService } from 'src/app/site.service';

@Component({
  selector: 'app-profile-picture-panel',
  templateUrl: './profile-picture-panel.component.html',
  styleUrls: ['./profile-picture-panel.component.scss']
})
export class ProfilePicturePanelComponent implements OnInit, OnDestroy {

  requestedAddress: BehaviorSubject<string> = new BehaviorSubject<string>("");
  myAddress!: BehaviorSubject<string>;
  listener!: Subscription;
  isFollowing!: boolean;
  user!: User;
  constructor(
    private route: ActivatedRoute,
    private APIservice: ApiService,
    private LIservice: LoggedInService,
    private SITEservice: SiteService,
    private router: Router
    ) { }

  async ngOnInit(): Promise<void> {
    this.listener = this.route.params.subscribe(params => {
      this.requestedAddress.next(params['address']);
    });
    this.myAddress = this.LIservice.myAddress;
    this.user = await this.SITEservice.getUser(this.requestedAddress.getValue());
    this.isFollowing = this.APIservice.isAddressFollowingAddress(this.myAddress.getValue(), this.requestedAddress.getValue());
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }

  showEdit(): void {
    this.router.navigate([{outlets: {
      popup: ['edit-profile', this.requestedAddress.getValue()]
    }}]);
  }

  hideEdit(): void {

  }

  edit(): void {
    // this.APIservice.edit(this.myAddress.getValue(), {

    // });
  }

  follow(): void {
    this.APIservice.followAddress(this.myAddress.getValue(), this.requestedAddress.getValue());
  }

  unfollow(): void {
    this.APIservice.unfollowAddress(this.myAddress.getValue(), this.requestedAddress.getValue());
  }

}
