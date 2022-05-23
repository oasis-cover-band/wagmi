import { Component, ElementRef, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ngIfBannerAnimations } from 'src/app/animations';
import { AccountInfo } from 'src/app/classes/accountInfo';
import { IsAccountService } from 'src/app/services/is-account.service';
import { ApiService } from 'src/app/services/api.service';
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
export class EditProfileComponent implements OnInit, OnDestroy {

  myAddress: BehaviorSubject<string> = this.WEB3service.loggedIn.walletAddress;
  public account!: BehaviorSubject<AccountInfo>;
  @ViewChild('name') name!: ElementRef<any>;
  @ViewChild('bio') bio!: ElementRef<any>;
  nameChanged: boolean = false;
  bioChanged: boolean = false;
  avatarChanged: boolean = false;
  bannerChanged: boolean = false;
  borderChanged: boolean = false;
  accessoryChanged: boolean = false;
  listener!: Subscription;
  originalName!: string | undefined;
  originalBio!: string | undefined;
  originalAvatar!: string | undefined;
  originalBanner!: string | undefined;
  originalBorder!: string | undefined;
  originalAccessory!: string | undefined;
  constructor(
    private router: Router,
    private WEB3service: Web3Service,
    private SITEservice: SiteService,
    private isAccount: IsAccountService,
    private APIservice: ApiService
  ) { }

  async ngOnInit(): Promise<void> {
    const response = await this.SITEservice.getAccount(this.myAddress.getValue());
    if (this.isAccount.isAccount(response)) {
      this.SITEservice.editedUser.next(response);
      this.account = this.SITEservice.editedUser;
      this.originalName = this.account.getValue().accountId;
      this.originalBio = this.account.getValue().bio;
      this.originalAvatar = this.account.getValue().avatarUri;
      this.originalBanner = this.account.getValue().bannerUri;
      this.originalBorder = this.account.getValue().borderUri;
      this.originalAccessory = this.account.getValue().accessoryUri;
      this.listener = this.SITEservice.editedUser.subscribe(account => {
        console.log(account);
        if (account.accountId !== this.originalName) {
          this.nameChanged = true;
        }
        if (account.bio !== this.originalBio) {
          this.bioChanged = true;
        }
        if (account.avatarUri !== this.originalAvatar) {
          this.avatarChanged = true;
        }
        if (account.bannerUri !== this.originalBanner) {
          this.bannerChanged = true;
        }
        if (account.borderUri !== this.originalBorder) {
          this.borderChanged = true;
        }
        if (account.accessoryUri !== this.originalAccessory) {
          this.accessoryChanged = true;
        }
      });
    }
    if (this.account.getValue().bannerUri === '') {
      this.account.getValue().bannerUri = `../assets/textures/` + Number(this.myAddress.getValue()) % 340 + `.png`;
    }
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  edit() {
    if (this.nameChanged || this.bioChanged || this.avatarChanged || this.bannerChanged || this.borderChanged || this.accessoryChanged) {
      if (this.name.nativeElement.value !== '') {
        this.SITEservice.editedUser.getValue().accountId = this.name.nativeElement.value;
      }
      if (this.bio.nativeElement.value !== '') {
        this.SITEservice.editedUser.getValue().bio = this.bio.nativeElement.value;
      }
      this.APIservice.updateAccount(this.SITEservice.editedUser.getValue());
      this.router.navigate([{outlets: {
        popup: ['empty']
      }}]);
    }
  }

  uploadAvatarPicture() {

  }

  uploadBannerPicture() {

  }

  chooseBorderPicture() {
    this.router.navigate([{outlets: {
      popupAction: ['edit-profile', 'border']
    }}]);
  }

  chooseAccessoryPicture() {
    this.router.navigate([{outlets: {
      popupAction: ['edit-profile', 'accessory']
    }}]);
  }

  close() {
    console.log("close");
    this.router.navigate([{outlets: {
      popup: ['empty']
    }}]);
  }

}
