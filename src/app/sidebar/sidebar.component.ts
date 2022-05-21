import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ngIfAnimations } from '../animations';
import { AccountInfo } from '../classes/accountInfo';
import { IsAccountService } from '../is-account.service';
import { SiteService } from '../services/site.service';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [ngIfAnimations]
})
export class SidebarComponent implements OnInit {
  friends: AccountInfo[] = [

  ];
  account!: AccountInfo | number;
  myAddress: BehaviorSubject<string> = this.WEB3service.loggedIn.walletAddress;
  currentRoute: BehaviorSubject<string> = this.SITEservice.currentRoute;
  constructor(
    private router: Router,
    private SITEservice: SiteService,
    private WEB3service: Web3Service,
    private isAccount: IsAccountService,
    private route: ActivatedRoute
    ) { }

  async ngOnInit(): Promise<void> {
  
      this.myAddress.subscribe(async newAddress => {
        this.account = await this.SITEservice.getAccount(newAddress);
        if (this.isAccount.isAccount(this.account)) {
          this.account.friends.forEach(async friend => {
            const response = await this.SITEservice.getAccount(friend);
            if (this.isAccount.isAccount(response)) {
              this.friends.push(response);
            }
          });
        }
      });
  }

  goHome(): void {
    this.router.navigate([{outlets: {left: ['empty'], center: ['notifications'], right: ['alerts']}}])
    this.SITEservice.mouseover.next('');
    this.SITEservice.currentRoute.next('home');
    this.SITEservice.viewing.next('');
  }

  showBasic(): void {
    this.router.navigate([{outlets: {
      left: ['profile-picture',  this.SITEservice.viewing.getValue()],
      center: ['profile',  this.SITEservice.viewing.getValue()],
      right: ['profile-stats',  this.SITEservice.viewing.getValue()]
    }}])
    this.SITEservice.mouseover.next('');
    this.SITEservice.currentRoute.next('profile/basic_info/'.concat(this.SITEservice.viewing.getValue()));
  }

  showTransactions(): void {
    this.router.navigate([{outlets: {
      left: ['profile-picture',  this.SITEservice.viewing.getValue()],
      center: ['notifications',  this.SITEservice.viewing.getValue()],
      right: ['profile-stats',  this.SITEservice.viewing.getValue()]
    }}])
    this.SITEservice.mouseover.next('');
    this.SITEservice.currentRoute.next('profile/transactions_info/'.concat(this.SITEservice.viewing.getValue()));
  }

  showFollowers(): void {
    this.router.navigate([{outlets: {
      left: ['profile-picture',  this.SITEservice.viewing.getValue()],
      center: ['followers',  this.SITEservice.viewing.getValue()],
      right: ['profile-stats',  this.SITEservice.viewing.getValue()]
    }}])
    this.SITEservice.mouseover.next('');
    this.SITEservice.currentRoute.next('profile/followers_info/'.concat(this.SITEservice.viewing.getValue()));
  }

  showFollowing(): void {
    this.router.navigate([{outlets: {
      left: ['profile-picture',  this.SITEservice.viewing.getValue()],
      center: ['following',  this.SITEservice.viewing.getValue()],
      right: ['profile-stats',  this.SITEservice.viewing.getValue()]
    }}])
    this.SITEservice.mouseover.next('');
    this.SITEservice.currentRoute.next('profile/following_info/'.concat(this.SITEservice.viewing.getValue()));
  }


  onOver(value: string): void {
    this.SITEservice.mouseover.next(value);
  }

  onLeave(value: string): void {
    this.SITEservice.mouseover.next(value);
  }

}
