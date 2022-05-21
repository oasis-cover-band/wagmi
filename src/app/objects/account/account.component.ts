import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AccountInfo } from 'src/app/classes/accountInfo';
import { IsAccountService } from 'src/app/is-account.service';
import { ApiService } from '../../services/api.service';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() address!: string;
  @Input() avatarUri!: string;
  @Input() borderUri!: string;
  @Input() accessoryUri!: string;
  @HostBinding("class.extralarge") @Input() extralarge: boolean = false;
  @HostBinding("class.large") @Input() large: boolean = false;
  @HostBinding("class.medium") @Input() medium: boolean = false;
  @HostBinding("class.small") @Input() small: boolean = false;
  @Input() chat: boolean = false;
  @Input() view: boolean = false;
  @HostListener('click') onClick(){
    if (this.chat === true) {

    } else if (this.view === true) {
      this.router.navigate([{outlets: {
        left: ['profile-picture',  this.address],
        center: ['profile',  this.address],
        right: ['profile-stats',  this.address]
      }}])
      this.SITEservice.mouseover.next('');
      this.SITEservice.currentRoute.next('profile/basic_info/'.concat(this.address));
      this.SITEservice.viewing.next(this.address);
    }
  }
  @HostListener('mouseleave') onLeave(){
    if (this.showingAddress === true) {
      this.showingAddress = false;
      this.hideAddress();
    } else {

    }
  }
  @HostListener('mouseenter') onEnter(){
    if (this.showingAddress === false) {
      this.showingAddress = true;
      this.showAddress();
    } else {
      
    }
  }
  showingAddress: boolean = false;
  defaultAccessory: boolean = false;
  constructor(
    public APIservice: ApiService,
    private router: Router,
    private SITEservice: SiteService,
    private isAccount: IsAccountService
  ) { }

  async ngOnInit(): Promise<void> {
    console.log(this.avatarUri);
    const response = await this.SITEservice.getAccount(this.address);
    let account!: AccountInfo;
    if (this.isAccount.isAccount(response)) {
      account = response;
    } else {
      return;
    }
    if (this.avatarUri === '' || this.avatarUri === undefined || this.avatarUri === null || this.avatarUri === "") {
      this.avatarUri = `../assets/textures/` + (Math.floor(Number(this.address) * 420 / 3)) % 340 + `.png`;
    }
    if (this.borderUri === '' || this.borderUri === undefined || this.borderUri === null || this.borderUri === "") {
      this.borderUri = `../assets/textures/` + (Math.floor(Number(this.address) * 42069 / 3)) % 340 + `.png`;
    }
    if (this.accessoryUri === '' || this.accessoryUri === undefined || this.accessoryUri === null || this.accessoryUri === "") {
      this.defaultAccessory = true;
      // ***********************
      // START FULL USE OF GIFS
      // ***********************
      // if (account !== undefined && account.reputation !== undefined && account.reputation < 0) {
      //   this.accessoryUri = `../assets/accessories/png/112.png`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 100) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/3.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 200) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/5.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 300) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/6.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 400) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/4.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 500) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/7.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 600) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/8.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 700) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/13.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 800) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/14.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 900) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/1.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 1000) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/2.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 1100) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/15.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 1200) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/0.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 1300) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/12.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 1400) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/11.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 1500) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/9.gif`;
      // } else if (account !== undefined && account.reputation !== undefined && account.reputation < 1600) {
      //   // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
      //   this.accessoryUri = `../assets/accessories/gif/10.gif`;
      // }
      // ***********************
      // END FULL USE OF GIFS
      // ***********************
      
      // ***********************
      // START SHIELDS ONLY USE OF GIFS
      // ***********************
      if (account !== undefined && account.reputation !== undefined && account.reputation < 0) {
          this.accessoryUri = `../assets/accessories/png/112.png`;
        } else if (account !== undefined && account.reputation !== undefined && account.reputation < 100) {
          // PICK PNG ACCORDING TO % OF USER ADDRESS
          this.accessoryUri = ``;
        } else if (account !== undefined && account.reputation !== undefined && account.reputation < 200) {
          // PICK PNG ACCORDING TO % OF USER ADDRESS
          this.accessoryUri = `../assets/accessories/png/` + (Math.floor(Number(this.address) * 42069 / 3)) % 311 + `.png`;
        }  else if (account !== undefined && account.reputation !== undefined && account.reputation < 400) {
          // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
          this.accessoryUri = `../assets/accessories/gif/4.gif`;
        } else if (account !== undefined && account.reputation !== undefined && account.reputation < 800) {
          // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
          this.accessoryUri = `../assets/accessories/gif/14.gif`;
        } else if (account !== undefined && account.reputation !== undefined && account.reputation < 1200) {
          // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
          this.accessoryUri = `../assets/accessories/gif/0.gif`;
        } else if (account !== undefined && account.reputation !== undefined && account.reputation < 1600) {
          // this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
          this.accessoryUri = `../assets/accessories/gif/10.gif`;
        }
        // ***********************
        // END SHIELDS ONLY USE OF GIFS
        // ***********************
    }
  }

  showAddress() {
    this.SITEservice.mouseover.next('profile/'.concat(this.address));
  }

  hideAddress() {
    this.SITEservice.mouseover.next('');
  }

}