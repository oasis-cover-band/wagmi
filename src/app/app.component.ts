import { Component } from '@angular/core';
import { TimeService } from './time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wagmi';

  constructor(
    private TIMEservice: TimeService
  ) {
    this.TIMEservice.start();
  }
}
