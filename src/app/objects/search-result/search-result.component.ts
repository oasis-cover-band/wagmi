import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @Input() data!: any;
  @Input() type!: string;
  @Input() matchedBy!: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goTo(): void {
    this.router.navigate([{outlets: {
      left: ['item-bio', this.type, this.data.id],
      center: ['item-landing', this.type, this.data.id],
      right: ['service-brand', 'uniswap']
    }}])
  }
}
