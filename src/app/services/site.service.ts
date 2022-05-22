import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { AccountInfo } from '../classes/accountInfo';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  public viewing: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public mouseover: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public currentRoute: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public editedUser: BehaviorSubject<AccountInfo> = new BehaviorSubject<AccountInfo>({
    accountId: '',
    walletAddress: '',
    bio: '',
    followers: 0,
    following: 0,
    avatarUri: '',
    bannerUri: '',
    borderUri: '',
    accessoryUri: '',
    record: [],
    joinDate: '',
    reputation: 0,
    friends: []
  });
  constructor(
    private APIservice: ApiService
  ) { }

  async getAccount(address: string): Promise<AccountInfo | number> {
    return await this.APIservice.getAccount(address, true);
  }
}
