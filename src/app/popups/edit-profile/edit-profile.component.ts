import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ngIfBannerAnimations } from 'src/app/animations';
import { AccountInfo } from 'src/app/classes/account';
import { IsAccountService } from 'src/app/is-account.service';
import { Web3Service } from 'src/app/services/web3.service';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  animations: [
    ngIfBannerAnimations
  ]
})
export class EditProfileComponent implements OnInit {

  myAddress: BehaviorSubject<string> = this.WEB3service.loggedIn.walletAddress;
  account!: AccountInfo;
  @ViewChild('name') name!: ElementRef<any>;
  @ViewChild('bio') bio!: ElementRef<any>;
  avatarChanged: boolean = false;
  bannerChanged: boolean = false;
  borderChanged: boolean = false;
  accessoryChanged: boolean = false;
  constructor(
    private router: Router,
    private WEB3service: Web3Service,
    private SITEservice: SiteService,
    private isAccount: IsAccountService
  ) { }

  async ngOnInit(): Promise<void> {
    const response = await this.SITEservice.getAccount(this.myAddress.getValue());
    if (this.isAccount.isAccount(response)) {
      this.account = response;
    }
    if (this.account.bannerUri === '') {
      this.account.bannerUri = `../assets/textures/` + Number(this.myAddress.getValue()) % 340 + `.png`;
    }
  }

  edit() {

  }

  uploadAvatarPicture() {

  }

  uploadBannerPicture() {

  }

  uploadBorderPicture() {

  }

  uploadAccessoryPicture() {

  }

  close() {
    console.log("close");
    this.router.navigate([{outlets: {
      popup: ['empty']
    }}]);
  }

}
