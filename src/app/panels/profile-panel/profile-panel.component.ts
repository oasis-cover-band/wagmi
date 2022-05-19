import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss']
})
export class ProfilePanelComponent implements OnInit {

  address: BehaviorSubject<string> = new BehaviorSubject<string>("");
  name!: string;
  tagline!: string;
  badges!: {
      icon: string,
      description: string
  }[];
  constructor(
    private route: ActivatedRoute,
    private APIservice: ApiService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.address.next(params['address']);
    });

    this.name = this.APIservice.getAddressName(this.address.getValue());
    this.tagline = this.APIservice.getAddressTagline(this.address.getValue());
    this.badges = this.APIservice.getAddressBadges(this.address.getValue());
  }

}
