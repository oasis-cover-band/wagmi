import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ngIfAnimations } from '../animations';
import { User } from '../classes/user';
import { LoggedInService } from '../logged-in.service';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    ngIfAnimations
  ]
})
export class NavbarComponent implements OnInit {

  myAddress: BehaviorSubject<string> = this.LIservice.myAddress;
  currentRoute: BehaviorSubject<string> = this.SITEservice.currentRoute;
  user!: User;
  constructor(
    private LIservice: LoggedInService,
    public SITEservice: SiteService
  ) {
    this.myAddress.subscribe(async newAddress => {
      this.user = await this.SITEservice.getUser(newAddress);
    });
  }

  ngOnInit(): void {
  }

}
