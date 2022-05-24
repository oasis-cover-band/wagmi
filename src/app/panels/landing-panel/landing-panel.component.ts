import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-panel',
  templateUrl: './landing-panel.component.html',
  styleUrls: ['./landing-panel.component.scss']
})
export class LandingPanelComponent implements OnInit, OnDestroy {

  name: string = 'WAGMI';
  taglineIndex: number = 0;
  taglines: string[][][] = [
    [[`STOP`, `FOLLOWING`], [`PEOPLE`,  `WHO`], [`CONSTANTLY`,  `LOSE`,  `MONEY.`]],
    [[`STOP`, `FOLLOWING`], [`PEOPLE`,  `WHO`], [`ARE`,  `BROKE`,  `BUT`, `CLAIM`, `OTHERWISE.`]],
    [[`STOP`, `TAKING`], [`ADVICE`, `FROM`], [`REPEAT`,  `LOSERS.`]],
    [[`STOP`, `TAKING`], [`ADVICE`, `FROM`], [`NEFARIOUS`,  `INFLUENCERS.`]],
    [[`STOP`, `FALLING`], [`FOR`], [`KNOWN`, `SCAMS.`]],
    [[`STOP`, `FALLING`], [`FOR`], [`SOCIAL`, `ENGINEERING.`]],
    [[`STOP`, `LISTENING`], [`TO`], [`KNOWN`, `FRAUDS`, `OR`, `PUMP`, `+`, `DUMPERS.`]],
    [[`STOP`, `LISTENING`], [`TO`], [`CHARLATANS`, `CON-MEN`, `OR`, `SCAM-ARTISTS`]],
    [[`STOP`, `BUYING`], [`FROM`], [`KNOWN`, `SCAMMERS`, `OR`, `FAKES.`]],
    [[`START`, `WITH`], [this.name], [` - ANON`, `OR`, `NOT,`],  [`ACTIONS`, `SPEAK`, `LOUDER`, `THAN`, `WORDS.`]],
  ];
  taglineInterval!: any;
  constructor() { }

  ngOnInit(): void {
    this.taglineInterval = setInterval(() => {
      this.switchTagline();
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.taglineInterval);
  }

  switchTagline(): void {
    if (this.taglineIndex >= this.taglines.length - 1) {
      this.taglineIndex = 0;
    } else {
      this.taglineIndex++;
    }
  }
  getSplit() {
    return this.name.split('');
}

}
