import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() data!: any;
  @Input() type!: string;
  @Input() matchedBy!: string;
  constructor() { }

  ngOnInit(): void {
  }

  goTo(): void {
    
  }
}
