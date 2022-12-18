import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountInfo } from '../classes/accountInfo';
import { Brand } from '../classes/brand';

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
  public serviceBrands: Brand[] = [
    {
      name: 'uniswap',
      avatarUri: 'assets/icons/uniswap.png',
      bio: `Uniswap is one of the leading AMM's on Ethereum.`,
      socials: {
        websiteUri: `https://uniswap.org/`,
        discordUri: `https://discord.com/invite/FCfyBSbCU5`,
        githubUri: `https://github.com/Uniswap`,
        twitterUri: `https://twitter.com/Uniswap`,
        facebookUri: ``,
        telegramUri: ``,
      },
      reputation: 100,
    }
  ];
  constructor(
  ) { }

  async updateEditedAccount(editedAccount: AccountInfo) {
    this.editedAccount.next(editedAccount);
  }
}
