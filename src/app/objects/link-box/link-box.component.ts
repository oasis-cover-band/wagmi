import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-link-box',
  templateUrl: './link-box.component.html',
  styleUrls: ['./link-box.component.scss']
})
export class LinkBoxComponent implements OnInit {

  @Input() data!: {
    link: string,
    images: string[],
    heading: string,
    footing: string,
    tagline: string | undefined,
    amount: number | undefined
  };
  @Input() rank!: number;
  @Input() type!: string;
  @Input() service!: string;
  @HostBinding('class') @Input() styling!: string;
  // @HostBinding('style.background') background!: string;
  constructor(
    private router: Router,
    private SITEservice: SiteService
  ) { }

  ngOnInit(): void {
    // this.background = 'url(../../../assets/textures/'.concat(String(this.data.image)).concat('.png)');
  }

  viewItem(): void {
    this.router.navigate([{outlets: {
      left: ['item-bio', this.type, this.data.link.substr(0, this.data.link.indexOf("-"))],
      center: ['item-landing', this.type, this.data.link.substr(0, this.data.link.indexOf("-"))],
      right: ['service-brand', this.service]
    }}])
      this.SITEservice.mouseover.next('');
      console.log(this.data.link.substr(0, this.data.link.indexOf("-")));
      this.SITEservice.currentRoute.next(this.service.concat('/').concat(this.type).concat('/view/').concat(this.data.link.substr(0, this.data.link.indexOf("-"))));
    }
}
