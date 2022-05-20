import { Component, OnInit } from '@angular/core';
import { LoggedInService } from 'src/app/logged-in.service';

@Component({
  selector: 'app-alerts-panel',
  templateUrl: './alerts-panel.component.html',
  styleUrls: ['./alerts-panel.component.scss']
})
export class AlertsPanelComponent implements OnInit {

  alerts = this.LIservice.alerts;
  constructor(
    private LIservice: LoggedInService
  ) { }

  ngOnInit(): void {
  }

}
