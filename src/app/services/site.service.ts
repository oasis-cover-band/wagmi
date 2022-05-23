import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountInfo } from '../classes/accountInfo';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  public viewing: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public mouseover: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public currentRoute: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public editedAccount: BehaviorSubject<AccountInfo> = new BehaviorSubject<AccountInfo>({
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
  ) { }

  async updateEditedAccount(editedAccount: AccountInfo) {
    this.editedAccount.next(editedAccount);
  }
}
