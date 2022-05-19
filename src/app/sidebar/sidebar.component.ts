import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  friendList = [
    "0x0",
    "0x0",
    "0x0",
  ]
  friends: any = [

  ];
  constructor(
    private router: Router,
    private SITEservice: SiteService
    ) { }

  ngOnInit(): void {
    this.friendList.forEach(async friend => {
      this.friends.push(await this.SITEservice.getUser(friend));
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
