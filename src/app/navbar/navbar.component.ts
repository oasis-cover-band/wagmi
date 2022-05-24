import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ngIfAnimations, ngIfConsoleAnimations, ngIfProfileAnimations } from '../animations';
import { AccountInfo } from '../classes/accountInfo';
import { Web3Service } from '../services/web3.service';
import { SiteService } from '../services/site.service';
import { IsAccountService } from '../../app/services/is-account.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    ngIfConsoleAnimations,
    ngIfAnimations,
    ngIfProfileAnimations
  ]
})
export class NavbarComponent implements OnInit {

  myAddress: BehaviorSubject<string> = this.WEB3service.loggedIn.walletAddress;
  currentRoute: BehaviorSubject<string> = this.SITEservice.currentRoute;
  account?: AccountInfo;
  loggingIn: boolean = false;
  constructor(
    private WEB3service: Web3Service,
    public SITEservice: SiteService,
    private APIservice: ApiService,
    private isAccount: IsAccountService,
    private router: Router
  ) {
    this.myAddress = this.WEB3service.loggedIn.walletAddress;
  }

  async ngOnInit(): Promise<void> {
    if (this.myAddress.getValue() !== "") {
      const response = await this.APIservice.getAccount(this.myAddress.getValue());
      if (this.isAccount.isAccount(response)) {
        this.account = response;
      }
    }
  }

  async logout(): Promise<void> {
    this.WEB3service.disconnectWallet().then(async loggedOutWalletAddress => {
      console.log('Logged out as: ', loggedOutWalletAddress);
      delete this.account;
      this.SITEservice.currentRoute.next('home');
      this.router.navigate([{outlets: {
        left: ['empty'],
        center: ['landing'],
        right: ['empty'],
        popup: ['empty'],
        popupAction: ['empty']
      }}])
    });
  }

  async createAccount(): Promise<void> {
    console.log('Account created as: ', this.myAddress.getValue());
    if (this.account === undefined && this.myAddress.getValue() !== "") {
      this.APIservice.createAccount(this.myAddress.getValue())
      .then(response => {
        if (this.isAccount.isAccount(response)) {
          this.account = response;
        }
      });
    }
  }

  async login(): Promise<void> {
    this.loggingIn = true;
    if (this.myAddress.getValue() === '') {
      this.WEB3service.connectWallet().then(async loggedInWalletAddress => {
        console.log('Logged in as: ', loggedInWalletAddress);
        if (loggedInWalletAddress !== "") {
          const response = await this.APIservice.getAccount(loggedInWalletAddress);
          if (this.isAccount.isAccount(response)) {
            this.account = response;
            if (this.myAddress.getValue() === '') {
              this.router.navigate([{outlets: {left: ['empty'], center: ['landing'], right: ['empty']}}])
            } else {
              this.router.navigate([{outlets: {left: ['empty'], center: ['notifications'], right: ['alerts']}}])
            }
            this.SITEservice.mouseover.next('');
            this.SITEservice.currentRoute.next('home');
            this.SITEservice.viewing.next('');
          }
        }
        this.loggingIn = false;
      })
    } else {
      this.WEB3service.disconnectWallet();
      this.loggingIn = false;
    }
  }

}
