import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  myAddress: BehaviorSubject<string> = new BehaviorSubject<string>("0x0");
  alerts: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([
    0, 1, 2, 3, 4, 5
  ]);
  constructor() { }
}
