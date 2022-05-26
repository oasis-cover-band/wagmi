import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Brand } from 'src/app/classes/brand';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-service-brand-panel',
  templateUrl: './service-brand-panel.component.html',
  styleUrls: ['./service-brand-panel.component.scss']
})
export class ServiceBrandPanelComponent implements OnInit {

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

  ngOnInit(): void {
    this.brand = this.SITEservice.serviceBrands[this.SITEservice.serviceBrands.findIndex(brand => {if (brand.name === this.brandName) {return true} else {return false}})];

    if (this.brand.socials.websiteUri !== undefined && this.brand.socials.websiteUri !== '') {
      this.socials.push({
        icon: 'website',
        description: 'Site',
        uri: this.brand.socials.websiteUri
      })
    }

    if (this.brand.socials.discordUri !== undefined && this.brand.socials.discordUri !== '') {
      this.socials.push({
        icon: 'discord',
        description: 'Discord',
        uri: this.brand.socials.discordUri
      })
    }

    if (this.brand.socials.githubUri !== undefined && this.brand.socials.githubUri !== '') {
      this.socials.push({
        icon: 'github',
        description: 'Github',
        uri: this.brand.socials.githubUri
      })
    }

    if (this.brand.socials.twitterUri !== undefined && this.brand.socials.twitterUri !== '') {
      this.socials.push({
        icon: 'twitter',
        description: 'Twitter',
        uri: this.brand.socials.twitterUri
      })
    }

    if (this.brand.socials.telegramUri !== undefined && this.brand.socials.telegramUri !== '') {
      this.socials.push({
        icon: 'telegram',
        description: 'Telegram',
        uri: this.brand.socials.telegramUri
      })
    }

    if (this.brand.socials.facebookUri !== undefined && this.brand.socials.facebookUri !== '') {
      this.socials.push({
        icon: 'facebook',
        description: 'Facebook',
        uri: this.brand.socials.facebookUri
      })
    }
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }

}
