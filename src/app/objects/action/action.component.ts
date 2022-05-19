import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() icon: string = "home";
  @Input() description: string = "Home";
  constructor() { }

  ngOnInit(): void {
  }

}
