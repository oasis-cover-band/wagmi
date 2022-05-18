import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoggedInService } from '../logged-in.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  myAddress: BehaviorSubject<string> = this.LIservice.myAddress;
  constructor(
    private LIservice: LoggedInService
    ) { }

  ngOnInit(): void {
  }

}