import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CryptoCompareService } from 'src/app/services/crypto-compare.service';
import { SiteService } from 'src/app/services/site.service';
import { SubgraphService } from 'src/app/services/subgraph.service';

@Component({
  selector: 'app-item-bio-panel',
  templateUrl: './item-bio-panel.component.html',
  styleUrls: ['./item-bio-panel.component.scss']
})
export class ItemBioPanelComponent implements OnInit {

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
    private SUBGRAPHservice: SubgraphService,
    public CRYPTOCOMPAREservice: CryptoCompareService
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
    } else if (this.type === 'token') {
      await this.SUBGRAPHservice.pool(this.address, this.item);
    }
  }

  parseInt(stringifiedNumber: string): number {
    return parseInt(stringifiedNumber);
  }

}
