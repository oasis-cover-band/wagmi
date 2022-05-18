import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoggedInService } from '../logged-in.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  myAddress: BehaviorSubject<string> = this.LIservice.myAddress;
  constructor(
    private LIservice: LoggedInService
  ) { }

  ngOnInit(): void {
  }

}
