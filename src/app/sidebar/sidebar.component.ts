import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../classes/user';
import { IsUserService } from '../is-user.service';
import { SiteService } from '../services/site.service';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  friends: User[] = [

  ];
  user!: User | number;
  myAddress: BehaviorSubject<string> = this.WEB3service.loggedIn.walletAddress;
  constructor(
    private router: Router,
    private SITEservice: SiteService,
    private WEB3service: Web3Service,
    private isUser: IsUserService
    ) { }

  async ngOnInit(): Promise<void> {
  
      this.myAddress.subscribe(async newAddress => {
        this.user = await this.SITEservice.getUser(newAddress);
        if (this.isUser.isUser(this.user)) {
          this.user.friends.forEach(async friend => {
            const response = await this.SITEservice.getUser(friend);
            if (this.isUser.isUser(response)) {
              this.friends.push(response);
            }
          });
        }
      });
  }

  goHome() {
    this.router.navigate([{outlets: {left: ['empty'], center: ['notifications'], right: ['alerts']}}])
    this.SITEservice.currentRoute.next('home');
  }

  onOver() {
    this.SITEservice.mouseover.next('home');
  }

  onLeave() {
    this.SITEservice.mouseover.next('');
  }

}
