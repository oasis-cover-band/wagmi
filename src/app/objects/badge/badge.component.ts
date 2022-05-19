import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() data!: {
    description: string,
    id: number,
    thumbnailUri: string,
    type: number
  };
  thumbnailUri!: string;
  constructor() {
  }

  ngOnInit(): void {
    switch (this.data.type) {
      case -7: {
        this.thumbnailUri = 'alert-6';
        break;
      }
      case -6: {
        this.thumbnailUri = 'alert-5';
        break;
      }
      case -5: {
        this.thumbnailUri = 'alert-4';
        break;
      }
      case -4: {
        this.thumbnailUri = 'alert-3';
        break;
      }
      case -3: {
        this.thumbnailUri = 'alert-2';
        break;
      }
      case -2: {
        this.thumbnailUri = 'alert-1';
        break;
      }
      case -1: {
        this.thumbnailUri = 'alert-0';
        break;
      }
      case 0: {
        this.thumbnailUri = 'award-0';
        break;
      }
      case 1: {
        this.thumbnailUri = 'award-1';
        break;
      }
      case 2: {
        this.thumbnailUri = 'award-2';
        break;
      }
      case 3: {
        this.thumbnailUri = 'chad';
        break;
      }
      case 4: {
        this.thumbnailUri = 'cowboy';
        break;
      }
      case 5: {
        this.thumbnailUri = 'king';
        break;
      }
      case 6: {
        this.thumbnailUri = 'queen';
        break;
      }
      case 7: {
        this.thumbnailUri = 'influencer';
        break;
      }
    }
  }

}
