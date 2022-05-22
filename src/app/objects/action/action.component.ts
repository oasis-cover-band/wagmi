import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  @Input() icon: string = "home";
  @Input() description: string = "Home";
  @Input() type: string = '';
  @ViewChild('fileUpload') fileUpload!: ElementRef; // SHOULD BE ELEMENT REF
  constructor() { }

  ngOnInit(): void {
  }

}
