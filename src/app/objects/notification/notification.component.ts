import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountInfo } from 'src/app/classes/accountInfo';
import { IsAccountService } from 'src/app/is-account.service';
import { SiteService } from '../../services/site.service';
import { TimeService } from '../../services/time.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() data = {
    address: "0x0",
    notificationType: "LIST",
    notificationCollection: "Azuki",
    notificationCollectionItem: "1939",
    notificationPrice: "69",
    timestamp: new Date().getTime(),
    reputation: new BehaviorSubject<number>(10),
  }
  timeElapsed: BehaviorSubject<string> = new BehaviorSubject<string>('0');
  account!: AccountInfo;
  constructor(
    public TIMEservice: TimeService,
    private SITEservice: SiteService,
    private isAccount: IsAccountService
  ) { }

  async ngOnInit(): Promise<void> {
    setInterval(() => {
      const msDifference = 
      this.data.timestamp - this.TIMEservice.time.getValue();
      let amountOfUnits = -1 * Math.ceil(msDifference / (1000));
      let timeUnit = "s";
      if (msDifference < -60000 && msDifference >= -60000 * 60) {
        amountOfUnits = -1 * Math.ceil(msDifference / (60000))
        timeUnit = "m"
      } else if (msDifference < -60000 * 60 && msDifference >= (-60000 * 60) * 24) {
        amountOfUnits = -1 * Math.ceil(msDifference / (60000 * 60))
        timeUnit = "h"
      } else if (msDifference < (-60000 * 60) * 24) {
        amountOfUnits = -1 * Math.ceil(msDifference / ((60000 * 60) * 24))
        timeUnit = "d"
      }
      this.timeElapsed.next(
        amountOfUnits + timeUnit
      )
    }, 1000);
    
    const response = await this.SITEservice.getAccount(this.data.address);
    if (this.isAccount.isAccount(response)) {
      this.account = response;
    }
  }

}
