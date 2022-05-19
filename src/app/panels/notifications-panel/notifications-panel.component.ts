import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-notifications-panel',
  templateUrl: './notifications-panel.component.html',
  styleUrls: ['./notifications-panel.component.scss']
})
export class NotificationsPanelComponent implements OnInit {

  notifications = [{
    address: "0x0",
    notificationType: "LIST",
    notificationCollection: "Azuki",
    notificationCollectionItem: "1939",
    notificationPrice: "69",
    timestamp: new Date().getTime(),
    reputation: new BehaviorSubject<number>(10),
  },
  {
    address: "0x0",
    notificationType: "LIST",
    notificationCollection: "Azuki",
    notificationCollectionItem: "1928",
    notificationPrice: "22",
    timestamp: (new Date().getTime()) - 100000,
    reputation: new BehaviorSubject<number>(10),
  },
  {
    address: "0x0",
    notificationType: "LIST",
    notificationCollection: "Azuki",
    notificationCollectionItem: "123",
    notificationPrice: "32",
    timestamp: (new Date().getTime()) - 95959999,
    reputation: new BehaviorSubject<number>(10),
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
