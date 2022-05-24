import { Injectable } from '@angular/core';
import { AccountInfo } from '../classes/accountInfo';
import axios from 'axios';
import { FollowInfo } from '../classes/followInfo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  images = [
    "../assets/dummy.png"
  ]
  maximumTextures = 425;
  baseURL: string = "https://m22xvxrqse.execute-api.us-east-2.amazonaws.com/";
  accounts: any = {
  };
  constructor() { }

  // 
  // GETS
  // 
  async getAccount(address: string, force: boolean = false): Promise<AccountInfo | number> {
    if (force || (this.accounts[address] === null || this.accounts[address] === undefined)) {
      return await axios({
        url: 'account/'.concat(String(address)),
        baseURL: this.baseURL,
        method: 'GET' 
      }).then(async (response: any) => {
        // handle success
        this.accounts[address] = response.data;
        return await response.data;
      })
      .catch(async (error: any) => {
        // handle error
        return await error.response.status;
      })
    } else {
      return this.accounts[address];
    }
  }
  // 
  // PUT
  // 
  async updateAccount(account: AccountInfo,
    nameChanged: boolean,
    bioChanged: boolean,
    updatedAvatar: File | Blob | undefined,
    updatedBanner: File | Blob | undefined,
    borderChanged: boolean,
    accessoryChanged: boolean
    ): Promise<AccountInfo | number> {
      if (!nameChanged) {
        delete account.accountId;
      }
      if (!bioChanged) {
        delete account.bio;
      }
      if (updatedAvatar === undefined) {
        delete account.avatarUri;
      }
      if (updatedBanner === undefined) {
        delete account.bannerUri;
      }
      if (!borderChanged) {
        delete account.borderUri;
      }
      if (!accessoryChanged) {
        delete account.accessoryUri;
      }
    return await axios({
      url: 'account/'.concat(String(account.walletAddress)),
      baseURL: this.baseURL,
      method: 'PUT',
      data: account
    }).then(async (response: any) => {
      
      if (account.walletAddress !== undefined) {
        this.accounts[account.walletAddress] = await this.getAccount(account.walletAddress, true);
        console.log(this.accounts[account.walletAddress]);
      }
      return await response.data;
    })
    .catch(async (error: any) => {
      // handle error
      return await error.response.status;
    })
  }
  // 
  // POST
  // 
  async createAccount(address: string): Promise<AccountInfo | number> {
    const newAccount: AccountInfo = {
      accountId: '',
      walletAddress: address,
      bio: '',
      followers: 0,
      following: 0,
      avatarUri: '',
      bannerUri: '',
      borderUri: '',
      accessoryUri: '',
      record: [],
      joinDate: String(new Date()),
      reputation: 0,
      friends: []
    }
    return await axios({
      url: 'account/'.concat(String(address)),
      baseURL: this.baseURL,
      method: 'POST',
      data: newAccount
    }).then(async (response: any) => {
      
      this.accounts[address] = response.data;
      return await response.data;
    })
    .catch(async (error: any) => {
      // handle error
      return await error.response.status;
    })
  }
  edit(address: string , edit: {
    accountId: '',
    avatarUri: '',
    bannerUri: '',
    bio: ''
  }) {
    
  }
  closeAlert(address: string , alertId: number) {
    
  }
  async followAddress(followerAddress: string, followingAddress: string): Promise<FollowInfo | number> {
    return await axios({
      url: 'account/'.concat(String(followerAddress)).concat('/following'),
      baseURL: this.baseURL,
      method: 'POST',
      data: {
        followingAddress: followingAddress
      }
    }).then(async (response: any) => {
      
      return await response.data;
    })
    .catch(async (error: any) => {
      // handle error
      return await error.response.status;
    })
  }
  async unfollowAddress(followerAddress: string, followingAddress: string): Promise<boolean | number> {
    return await axios({
      url: 'account/'.concat(String(followerAddress)).concat('/following'),
      baseURL: this.baseURL,
      method: 'DELETE',
      params: {
        followingAddress: followingAddress
      }
    }).then(async (response: any) => {
      
      // return await response.data;
      return true;
    })
    .catch(async (error: any) => {
      // handle error
      return await error.response.status;
    })
  }
  async following(followerAddress: string): Promise<FollowInfo[] | number> {
    return await axios({
      url: 'account/'.concat(String(followerAddress)).concat('/following'),
      baseURL: this.baseURL,
      method: 'GET',
    }).then(async (response: any) => {
      console.log(response.data);
      return response.data.items;
    })
    .catch(async (error: any) => {
      // handle error
      return await error.response.status;
    })
  }
  async isAddressFollowingAddress(followerAddress: string, followingAddress: string): Promise<boolean | number> {
    return await axios({
      url: 'account/'.concat(String(followerAddress)).concat('/following'),
      baseURL: this.baseURL,
      method: 'GET',
    }).then(async (response: any) => {
      console.log(response.data);
      console.log(response.data.items.findIndex((followInfo: FollowInfo) => {
        if (followInfo.followingAddress === followingAddress) {
          return true;
        } else {
          return false;
        }
      }))
      const index = response.data.items.findIndex((followInfo: FollowInfo) => {
        if (followInfo.followingAddress === followingAddress) {
          return true;
        } else {
          return false;
        }
      });
      if (index === -1) {
        return false;
      } else {
        return true;
      }
    })
    .catch(async (error: any) => {
      // handle error
      return await error.response.status;
    })
  }
  getAlerts(address: string): number[] {
    // essentially just returns the account's alerts - not entire object
    // would be dope to have this as a stream that i can "subscribe/observe" to
    return [0]
  }
}
