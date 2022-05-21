import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { AccountInfo } from '../classes/account';

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

  async getAccount(address: string): Promise<AccountInfo | number> {
    return await this.APIservice.getAccount(address, true);
  }
}
