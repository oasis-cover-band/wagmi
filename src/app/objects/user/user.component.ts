import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() address: BehaviorSubject<string> = new BehaviorSubject<string>("");
  @HostBinding("class.large") @Input() large: boolean = false;
  @HostBinding("class.medium") @Input() medium: boolean = false;
  @HostBinding("class.small") @Input() small: boolean = false;
  @Input() chat: boolean = false;
  @Input() view: boolean = false;
  constructor(
    public APIservice: ApiService
  ) { }

  ngOnInit(): void {
  }

}
