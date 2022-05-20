import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ngIfBannerAnimations } from 'src/app/animations';
import { User } from 'src/app/classes/user';
import { LoggedInService } from 'src/app/logged-in.service';
import { SiteService } from 'src/app/site.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  animations: [
    ngIfBannerAnimations
  ]
})
export class EditProfileComponent implements OnInit {

  myAddress: BehaviorSubject<string> = this.LIservice.myAddress;
  user!: User;
  @ViewChild('name') name!: ElementRef<any>;
  @ViewChild('bio') bio!: ElementRef<any>;
  avatarChanged: boolean = false;
  bannerChanged: boolean = false;
  constructor(
    private router: Router,
    private LIservice: LoggedInService,
    private SITEservice: SiteService
  ) { }

  async ngOnInit(): Promise<void> {
    this.user = await this.SITEservice.getUser(this.myAddress.getValue());
    if (this.user.bannerUri === '') {
      this.user.bannerUri = `../assets/textures/` + Number(this.myAddress.getValue()) % 340 + `.png`;
    }
    if (this.user.avatarUri === '') {
      this.user.avatarUri = `../assets/textures/` + (Math.floor(Number(this.myAddress.getValue()) * 420 / 3)) % 340 + `.png`;
    }
  }

  edit() {

  }

  uploadProfilePicture() {

  }

  uploadBannerPicture() {

  }

  close() {
    console.log("close");
    this.router.navigate([{outlets: {
      popup: ['empty']
    }}]);
  }

}
