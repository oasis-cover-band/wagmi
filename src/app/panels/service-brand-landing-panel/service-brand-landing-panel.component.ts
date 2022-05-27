import { Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ngIfProfileAnimations } from 'src/app/animations';
import { Brand } from 'src/app/classes/brand';
import { SiteService } from 'src/app/services/site.service';
import { SubgraphService } from 'src/app/services/subgraph.service';

@Component({
  selector: 'app-service-brand-landing-panel',
  templateUrl: './service-brand-landing-panel.component.html',
  styleUrls: ['./service-brand-landing-panel.component.scss'],
  animations: [
    ngIfProfileAnimations
  ]
})
export class ServiceBrandLandingPanelComponent implements OnInit {

  brand!: Brand;
  brandName!: string;
  socials: {
    icon: string,
    description: string,
    uri: string
  }[] = [
  ]
  @HostBinding('class.hide') hide: boolean = false;
  @ViewChild('searchBar') searchBar!: ElementRef;
  listener!: Subscription;
  mostVolume: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  mostLiquid: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  hottest: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  trending: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  searchResults: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  tokenAddressSearchResults: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  tokenSymbolSearchResults: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  tokenNameSearchResults: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  poolAddressSearchResults: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(
    private SITEservice: SiteService,
    private route: ActivatedRoute,
    private SUBGRAPHservice: SubgraphService
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

    await this.SUBGRAPHservice.topPoolsAllTime(10, 'volumeUSD', undefined, this.mostLiquid);
    await this.SUBGRAPHservice.topPoolsAllTime(10, 'liquidity', undefined, this.mostVolume);
    await this.SUBGRAPHservice.topPoolsDaily(10, 'volumeUSD', undefined, undefined, this.hottest, true);
    await this.SUBGRAPHservice.topPoolsHourly(10, 'txCount', undefined, undefined, this.trending, true);
    console.log(this.hottest.getValue());
    // this.hottest = this.hottest.getValue().concat(this.hottest.getValue()).concat(this.hottest)
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }

  updateSearch(event: Event) {
    this.SUBGRAPHservice.search(
      this.searchBar.nativeElement.value,
      this.tokenAddressSearchResults,
      this.tokenSymbolSearchResults,
      this.tokenNameSearchResults,
      this.poolAddressSearchResults
    );
  }

}
