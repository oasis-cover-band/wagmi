import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../classes/user';
import { LoggedInService } from '../logged-in.service';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  friends: User[] = [

  ];
  user!: User;
  myAddress: BehaviorSubject<string> = this.LIservice.myAddress;
  constructor(
    private router: Router,
    private SITEservice: SiteService,
    private LIservice: LoggedInService
    ) { }

  async ngOnInit(): Promise<void> {
  
      this.myAddress.subscribe(async newAddress => {
        this.user = await this.SITEservice.getUser(newAddress);
        this.user.friends.forEach(async friend => {
          this.friends.push(await this.SITEservice.getUser(friend));
        });
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
