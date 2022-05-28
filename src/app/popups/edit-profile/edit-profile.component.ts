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
  updatedAvatar!: string;
  updatedBanner!: string;
  constructor(
    private router: Router,
    private WEB3service: Web3Service,
    private SITEservice: SiteService,
    private isAccount: IsAccountService,
    private APIservice: ApiService
  ) { }

  async ngOnInit(): Promise<void> {
    const response = await this.APIservice.getAccount(this.myAddress.getValue());
    if (this.isAccount.isAccount(response)) {
      this.SITEservice.editedAccount.next(response);
      this.account = this.SITEservice.editedAccount;
      this.originalName = this.account.getValue().accountId;
      this.originalBio = this.account.getValue().bio;
      this.originalAvatar = this.account.getValue().avatarUri;
      this.originalBanner = this.account.getValue().bannerUri;
      this.originalBorder = this.account.getValue().borderUri;
      this.originalAccessory = this.account.getValue().accessoryUri;
      this.listener = this.SITEservice.editedAccount.subscribe(account => {
        if (this.name !== undefined && this.name.nativeElement.value !== '') {
          this.nameChanged = true;
        } else {
          this.nameChanged = false;
        }
        if (this.bio !== undefined && this.bio.nativeElement.value !== '') {
          this.bioChanged = true;
        } else {
          this.bioChanged = false;
        }
        // HANDLED WITHIN RESPECTIVE FUNCTIONS
        // if (account.avatarUri !== this.originalAvatar) {
        //   this.avatarChanged = true;
        // } else {
        //   this.avatarChanged = false;
        // }
        // if (account.bannerUri !== this.originalBanner) {
        //   this.bannerChanged = true;
        // } else {
        //   this.bannerChanged = false;
        // }
        if (account.borderUri !== this.originalBorder) {
          this.borderChanged = true;
        } else {
          this.borderChanged = false;
        }
        if (account.accessoryUri !== this.originalAccessory) {
          this.accessoryChanged = true;
        } else {
          this.accessoryChanged = false;
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
  edit() {
    if (this.name.nativeElement.value !== '' || this.bio.nativeElement.value !== '' || this.avatarChanged || this.bannerChanged || this.borderChanged || this.accessoryChanged) {
      const account = this.SITEservice.editedAccount.getValue();
      if (this.name.nativeElement.value !== '') {
        account.accountId = this.name.nativeElement.value;
      }
      if (this.bio.nativeElement.value !== '') {
        account.bio = this.bio.nativeElement.value;
      }
      this.SITEservice.updateEditedAccount(account).then(after => {
        this.APIservice.updateAccount(
          account,
          this.nameChanged,
          this.bioChanged,
          this.updatedAvatar,
          this.updatedBanner,
          this.borderChanged,
          this.accessoryChanged
        ).then(after => {
          this.router.navigate([{outlets: {
            left: ['profile-picture',  account.walletAddress],
            center: ['profile',  account.walletAddress],
            right: ['profile-stats',  account.walletAddress],
            popup: ['empty']
          }}])
        });
      });
    }
  }

  updateName(event: Event): void {
      const account = this.SITEservice.editedAccount.getValue();
      account.accountId = this.name.nativeElement.value;
      if (this.name.nativeElement.value === '') {
        account.accountId = this.originalName;
      }
      this.SITEservice.updateEditedAccount(account);
  }

  updateBio(event: Event): void {
      const account = this.SITEservice.editedAccount.getValue();
      account.bio = this.bio.nativeElement.value;
      if (this.bio.nativeElement.value === '') {
        account.bio = this.originalBio;
      }
      this.SITEservice.updateEditedAccount(account);
  }

  updateAvatarPicture(event: any) {
    console.log(event);
    if (event !== null && event.target !== null && event.target.files !== null) {
      console.log(event.target.files);
      const file:File = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            // Use a regex to remove data url part
              this.updatedAvatar = String(reader.result);
              this.avatarChanged = true;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  updateBannerPicture(event: any) {
    if (event !== null && event.target !== null && event.target.files !== null) {
      const file:File = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            // Use a regex to remove data url part
              this.updatedBanner = String(reader.result);
              this.avatarChanged = true;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  updateBorderPicture() {
    this.router.navigate([{outlets: {
      popupAction: ['edit-profile', 'border']
    }}]);
  }

  updateAccessoryPicture() {
    this.router.navigate([{outlets: {
      popupAction: ['edit-profile', 'accessory']
    }}]);
  }

  close() {
    this.router.navigate([{outlets: {
      popup: ['empty']
    }}]);
  }

}
