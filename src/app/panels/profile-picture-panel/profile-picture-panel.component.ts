import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profile-picture-panel',
  templateUrl: './profile-picture-panel.component.html',
  styleUrls: ['./profile-picture-panel.component.scss']
})
export class ProfilePicturePanelComponent implements OnInit {

  address: BehaviorSubject<string> = new BehaviorSubject<string>("");
  joinDate!: Date;
  followerCount!: number;
  followingCount!: number;
  constructor(
    private route: ActivatedRoute,
    private APIservice: ApiService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.address.next(params['address']);
    });
    this.joinDate = this.APIservice.getAddressJoinDate(this.address.getValue());
    this.followerCount = this.APIservice.getAddressFollowerCount(this.address.getValue());
    this.followingCount = this.APIservice.getAddressFollowingCount(this.address.getValue());
  }



}
