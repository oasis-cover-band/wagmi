import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { SiteService } from 'src/app/site.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() address: BehaviorSubject<string> = new BehaviorSubject<string>("");
  @HostBinding("class.extralarge") @Input() extralarge: boolean = false;
  @HostBinding("class.large") @Input() large: boolean = false;
  @HostBinding("class.medium") @Input() medium: boolean = false;
  @HostBinding("class.small") @Input() small: boolean = false;
  @Input() chat: boolean = false;
  @Input() view: boolean = false;
  @HostListener('click') onClick(){
    if (this.chat === true) {

    } else if (this.view === true) {
      this.router.navigate([{outlets: {
        left: ['profile-picture',  this.address.getValue()],
        center: ['profile',  this.address.getValue()],
        right: ['profile-stats',  this.address.getValue()]
      }}])
      this.SITEservice.mouseover.next('');
      // ['/profile',  this.address.getValue()]
    }
  }
  @HostListener('mouseleave') onLeave(){
    if (this.showingAddress === true) {
      this.showingAddress = false;
      this.hideAddress();
    } else {

    }
  }
  @HostListener('mouseenter') onEnter(){
    if (this.showingAddress === false) {
      this.showingAddress = true;
      this.showAddress();
    } else {
      
    }
  }
  showingAddress: boolean = false;
  constructor(
    public APIservice: ApiService,
    private router: Router,
    private SITEservice: SiteService
  ) { }

  ngOnInit(): void {
  }

  showAddress() {
    this.SITEservice.mouseover.next('profile/'.concat(this.address.getValue()));
  }

  hideAddress() {
    this.SITEservice.mouseover.next('');
  }

}
