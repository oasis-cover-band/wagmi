import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Brand } from 'src/app/classes/brand';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-service-brand-bio-panel',
  templateUrl: './service-brand-bio-panel.component.html',
  styleUrls: ['./service-brand-bio-panel.component.scss']
})
export class ServiceBrandBioPanelComponent implements OnInit {

  brand!: Brand;
  brandName!: string;
  socials: {
    icon: string,
    description: string,
    uri: string
  }[] = [
  ]
  @HostBinding('class.hide') hide: boolean = false;
  listener!: Subscription;
  constructor(
    private SITEservice: SiteService,
    private route: ActivatedRoute
  ) {
    this.listener = this.route.params.subscribe(async params => {
      this.hide = true;
      setTimeout(() => {
        this.hide = false;
      }, 500);
      this.brandName = params['service'];
    });
  }

  async ngOnInit(): Promise<void> {
    this.brand = this.SITEservice.serviceBrands[this.SITEservice.serviceBrands.findIndex(brand => {if (brand.name === this.brandName) {return true} else {return false}})];
  }

}
