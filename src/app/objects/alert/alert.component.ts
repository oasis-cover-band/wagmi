import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { LoggedInService } from 'src/app/logged-in.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() data!: number;
  @Input() index!: number;
  alert!: string;
  alert0!: string;
  alert1!: string;
  // @HostListener('click') onClick(){
  //   this.APIservice.closeAlert(this.LIservice.myAddress.getValue(), this.index);
  // }
  constructor(
    private APIservice: ApiService,
    private LIservice: LoggedInService
  ) { }

  ngOnInit(): void {
    switch (this.data) {
      case 0: {
        this.alert = 
        `You've listed something.`;
        break;
      }
      case 1: {
        this.alert = 
        `You've delisted something.`;
        break;
      }
      case 2: {
        this.alert = 
        `You've transferred an ERC-20.`;
        break;
      }
      case 3: {
        this.alert = 
        `You've transferred an ERC-721.`;
        break;
      }
      case 4: {
        this.alert = 
        `You've transferred an ERC-1155.`;
        break;
      }
      case 5: {
        this.alert = 
        `You've received an ERC-20.`;
        break;
      }
      case 6: {
        this.alert = 
        `You've received an ERC-721.`;
        break;
      }
      case 7: {
        this.alert = 
        `You've received an ERC-1155.`;
        break;
      }
      case 8: {
        this.alert = 
        `You've transferred ETH.`;
        break;
      }
      case 9: {
        this.alert = 
        `You've received ETH.`;
        break;
      }
      case 10: {
        this.alert = 
        `You've gained a follower.`;
        break;
      }
      case 11: {
        this.alert = 
        `You've lost a follower.`;
        break;
      }
      case 12: {
        this.alert = 
        `You've gained a badge.`;
        break;
      }
      case 13: {
        this.alert = 
        `You've lost a badge.`;
        break;
      }
    }
    this.alert0 = this.alert.substr(0, this.alert.indexOf(' '));
    this.alert1 = this.alert.substr(this.alert.indexOf(' ') + 1);
  }

  close() {
      this.APIservice.closeAlert(this.LIservice.myAddress.getValue(), this.index);
  }

  view() {
    // go to notification details
      // this.APIservice.closeAlert(this.LIservice.myAddress.getValue(), this.index);
  }

}
