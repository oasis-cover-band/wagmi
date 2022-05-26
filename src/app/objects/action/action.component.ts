import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() icon: string = "home";
  @Input() description: string = "Home";
  @Input() outsideLink: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
