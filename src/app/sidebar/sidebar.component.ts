import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoggedInService } from '../logged-in.service';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  myAddress: BehaviorSubject<string> = this.LIservice.myAddress;
  friendList = [
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
    new BehaviorSubject<string>("0x0"),
  ]
  constructor(
    private LIservice: LoggedInService,
    private router: Router,
    private SITEservice: SiteService
    ) { }

  ngOnInit(): void {
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
