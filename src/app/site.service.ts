import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  public viewing: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public mouseover: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public currentRoute: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }
}
