import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ngIfAnimations } from '../animations';
import { AccountInfo } from '../classes/accountInfo';
import { Web3Service } from '../services/web3.service';
import { SiteService } from '../services/site.service';
import { IsAccountService } from '../is-account.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    ngIfAnimations
  ]
})
export class NavbarComponent implements OnInit {

  myAddress: BehaviorSubject<string> = this.WEB3service.loggedIn.walletAddress;
  currentRoute: BehaviorSubject<string> = this.SITEservice.currentRoute;
  account?: AccountInfo;
  constructor(
    private WEB3service: Web3Service,
    public SITEservice: SiteService,
    private APIservice: ApiService,
    private isAccount: IsAccountService
  ) {
    this.myAddress = this.WEB3service.loggedIn.walletAddress;
  }

  async ngOnInit(): Promise<void> {
    if (this.myAddress.getValue() !== "") {
      const response = await this.SITEservice.getAccount(this.myAddress.getValue());
      if (this.isAccount.isAccount(response)) {
        this.account = response;
      }
    }
  }

  async logout(): Promise<void> {
    this.WEB3service.disconnectWallet().then(async loggedOutWalletAddress => {
      console.log('Logged out as: ', loggedOutWalletAddress);
      delete this.account;
    });
  }

  async createAccount(): Promise<void> {
    console.log(this.account);
    if (this.account === undefined && this.myAddress.getValue() !== "") {
      this.APIservice.createAccount(this.myAddress.getValue());
    }
  }

  async login(): Promise<void> {
    if (this.myAddress.getValue() === '') {
      this.WEB3service.connectWallet().then(async loggedInWalletAddress => {
        console.log('Logged in as: ', loggedInWalletAddress);
        if (loggedInWalletAddress !== "") {
          const response = await this.SITEservice.getAccount(loggedInWalletAddress);
          if (this.isAccount.isAccount(response)) {
            console.log(response);
            this.account = response;
          }
        }
      })
    } else {
      this.WEB3service.disconnectWallet();
    }
  }

}
