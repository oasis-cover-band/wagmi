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

  @Input() address!: string;
  @Input() avatarUri!: string;
  @Input() borderUri!: string;
  @Input() accessoryUri!: string;
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
        left: ['profile-picture',  this.address],
        center: ['profile',  this.address],
        right: ['profile-stats',  this.address]
      }}])
      this.SITEservice.mouseover.next('');
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
    console.log(this.avatarUri);
    if (this.avatarUri === '' || this.avatarUri === undefined || this.avatarUri === null || this.avatarUri === "") {
      this.avatarUri = `../assets/textures/` + (Math.floor(Number(this.address) * 420 / 3)) % 340 + `.png`;
    }
    if (this.borderUri === '' || this.borderUri === undefined || this.borderUri === null || this.borderUri === "") {
      this.borderUri = `../assets/textures/` + (Math.floor(Number(this.address) * 42069 / 3)) % 340 + `.png`;
    }
    if (this.accessoryUri === '' || this.accessoryUri === undefined || this.accessoryUri === null || this.accessoryUri === "") {
      this.accessoryUri = `../assets/accessories/gif/` + (Math.floor(Number(this.address) * 42069 / 3)) % 8 + `.gif`;
    }
  }

  showAddress() {
    this.SITEservice.mouseover.next('profile/'.concat(this.address));
  }

  hideAddress() {
    this.SITEservice.mouseover.next('');
  }

}
