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
    await this.SUBGRAPHservice.pool(this.address, this.item);

  }

  ngOnDestroy(): void {
    if (this.listener) {
      this.listener.unsubscribe();
    }
  }

}
