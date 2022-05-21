import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ngIfAnimations } from '../animations';
import { User } from '../classes/user';
import { Web3Service } from '../services/web3.service';
import { SiteService } from '../services/site.service';
import { IsUserService } from '../is-user.service';
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
  user!: User;
  constructor(
    private WEB3service: Web3Service,
    public SITEservice: SiteService,
    private APIservice: ApiService,
    private isUser: IsUserService
  ) {
    this.myAddress = this.WEB3service.loggedIn.walletAddress;
  }

  async ngOnInit(): Promise<void> {
    if (this.myAddress.getValue() !== "") {
      const response = await this.SITEservice.getUser(this.myAddress.getValue());
      if (this.isUser.isUser(response)) {
        this.user = response;
      }
    }
  }

  async logout(): Promise<void> {

  }

  async createAccount(): Promise<void> {
    console.log(this.user);
    if (this.user === undefined && this.myAddress.getValue() !== "") {
      this.APIservice.setUser(this.myAddress.getValue());
    }
  }

  async login(): Promise<void> {
    if (this.myAddress.getValue() === '') {
      this.WEB3service.connectWallet().then(async loggedInWalletAddress => {
        console.log(loggedInWalletAddress, 'loggedInWalletAddress');
        if (loggedInWalletAddress !== "") {
          const response = await this.SITEservice.getUser(loggedInWalletAddress);
          if (this.isUser.isUser(response)) {
            console.log(response);
            this.user = response;
          }
        }
      })
    } else {
      this.WEB3service.disconnectWallet();
    }
  }

}
