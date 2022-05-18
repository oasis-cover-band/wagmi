import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  time: BehaviorSubject<number> = new BehaviorSubject<number>(new Date().getTime());
  timeInterval!: any; // NodeJS.Timeout
  constructor() {

  }

  start() {
    clearInterval(this.timeInterval);
    this.timeInterval = setInterval(() => {
      this.time.next(new Date().getTime());
    }, 1000);
  }
}
