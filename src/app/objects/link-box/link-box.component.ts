import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-box',
  templateUrl: './link-box.component.html',
  styleUrls: ['./link-box.component.scss']
})
export class LinkBoxComponent implements OnInit {

  @Input() data!: {
    link: string,
    image: number,
    heading: string,
    footing: string,
    tagline: string | undefined,
    amount: number | undefined
  };
  @Input() rank!: number;
  @HostBinding('class') @Input() type!: string;
  // @HostBinding('style.background') background!: string;
  constructor() { }

  ngOnInit(): void {
    // this.background = 'url(../../../assets/textures/'.concat(String(this.data.image)).concat('.png)');
  }

}
