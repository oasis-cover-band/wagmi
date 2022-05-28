import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SiteService } from 'src/app/services/site.service';
import { SubgraphService } from 'src/app/services/subgraph.service';

@Component({
  selector: 'app-item-landing-panel',
  templateUrl: './item-landing-panel.component.html',
  styleUrls: ['./item-landing-panel.component.scss']
})
export class ItemLandingPanelComponent implements OnInit {

  item: BehaviorSubject<any> = new BehaviorSubject<any>('');
  @HostBinding('class') type!: string;
  address!: string;
  socials: {
    icon: string,
    description: string,
    uri: string
  }[] = [
  ]
  @HostBinding('class.hide') hide: boolean = false;
  listener!: Subscription;
  chartData!: any[];
  chartFields!: string[];
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
      this.type = params['type'];
      this.address = params['address'];
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.type === 'pool') {
      await this.SUBGRAPHservice.pool(this.address, this.item);
      this.chartFields = [
        'token0Price',
        'token1Price',
        'volumeToken0',
        'volumeToken1',
        'volumeUSD',
        'feesUSD',
        'txCount'
      ];
    } else if (this.type === 'token') {
      await this.SUBGRAPHservice.token(this.address, this.item);
      this.chartFields = [
        'volume',
        'volumeUSD',
        'feesUSD'
      ];
    }
  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }

}
