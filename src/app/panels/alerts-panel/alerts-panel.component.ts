import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Web3Service } from '../../services/web3.service';

@Component({
  selector: 'app-alerts-panel',
  templateUrl: './alerts-panel.component.html',
  styleUrls: ['./alerts-panel.component.scss']
})
export class AlertsPanelComponent implements OnInit {

  alerts = new BehaviorSubject<any>([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]);
  constructor(
    private WEB3service: Web3Service
  ) { }

  ngOnInit(): void {
  }

}
