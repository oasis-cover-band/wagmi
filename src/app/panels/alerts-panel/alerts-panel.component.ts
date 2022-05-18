import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts-panel',
  templateUrl: './alerts-panel.component.html',
  styleUrls: ['./alerts-panel.component.scss']
})
export class AlertsPanelComponent implements OnInit {

  alerts = [
    `You've listed something..`,
    `You've listed something..`,
    `You've listed something..`,
    `You've listed something..`
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
