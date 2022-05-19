import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { User } from './classes/user';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  public viewing: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public mouseover: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public currentRoute: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(
    private APIservice: ApiService
  ) { }

  async getUser(address: string): Promise<User> {
    return await this.APIservice.getUser(address, true);
  }
}
