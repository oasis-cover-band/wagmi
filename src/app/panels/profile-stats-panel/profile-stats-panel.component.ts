import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profile-stats-panel',
  templateUrl: './profile-stats-panel.component.html',
  styleUrls: ['./profile-stats-panel.component.scss']
})
export class ProfileStatsPanelComponent implements OnInit, OnDestroy {

  address: BehaviorSubject<string> = new BehaviorSubject<string>("");
  score!: number;
  listener!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private APIservice: ApiService
    ) { }

  ngOnInit(): void {
    this.listener = this.route.params.subscribe(params => {
      this.address.next(params['address']);
    });

    this.score = this.APIservice.getAddressScore(this.address.getValue());
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }
}
