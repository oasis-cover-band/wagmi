import { Injectable } from '@angular/core';
import { AccountInfo } from '../classes/accountInfo';
import axios from 'axios';
import { FollowInfo } from '../classes/followInfo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  images = [
    "assets/dummy.png"
  ]
  maximumTextures = 425;
  baseURI: string = "https://m22xvxrqse.execute-api.us-east-2.amazonaws.com/";
  accounts: any = {
    accountId: '0230',
    walletAddress: '',
    bio: 'This is a test account',
    followers: 4234,
    following: 213,
    avatarUri: 'assets/textures/63.png',
    bannerUri: '',
    borderUri: '',
    accessoryUri:  'assets/accessories/png/18.png',
    record: [],
    joinDate: '12/02/22',
    reputation: 1232,
    friends: []
  };
  constructor() { }
  // ********************
  // START BACKEND
  //  ********************

  // 
  // GETS
  // 
  async getAccount(address: string, force: boolean = false): Promise<AccountInfo | number> {
    this.accounts.walletAddress = address;
    return this.accounts;
    // if (force || (this.accounts[address] === null || this.accounts[address] === undefined)) {
    //   return await axios({
    //     url: 'account/'.concat(String(address)),
    //     baseURL: this.baseURI,
    //     method: 'GET' 
    //   }).then(async (response: any) => {
    //     // handle success
    //     this.accounts[address] = response.data;
    //     return await response.data;
    //   })
    //   .catch(async (error: any) => {
    //     // handle error
    //     return await error.response.status;
    //   })
    // } else {
    //   return this.accounts[address];
    // }
  }
  // 
  // PUT
  // 
  async updateAccount(account: AccountInfo,
    nameChanged: boolean,
    bioChanged: boolean,
    updatedAvatar: string | undefined,
    updatedBanner: string | undefined,
    borderChanged: boolean,
    accessoryChanged: boolean
    ): Promise<AccountInfo | number> {
      let avatarUri;
      let bannerUri;
      console.log(updatedAvatar);
      console.log(updatedBanner);
      // THIS IS NOT YET READY
      // FRONT END BUG FIX REQUIRED
      // if (!nameChanged) {
      //   delete account.accountId;
      // }
      // if (!bioChanged) {
      //   delete account.bio;
      // }
      if (updatedAvatar === undefined) {
        avatarUri = updatedAvatar;
      } else {
        avatarUri = account.avatarUri;
      }
      if (updatedBanner === undefined) {
        bannerUri = updatedBanner;
      } else {
        bannerUri = account.bannerUri;
      }
      // if (!borderChanged) {
      //   delete account.borderUri;
      // }
      // if (!accessoryChanged) {
      //   delete account.accessoryUri;
      // }
      console.log(avatarUri);
      console.log(bannerUri);
    return await axios({
      url: 'account/'.concat(String(account.walletAddress)),
      baseURL: this.baseURI,
      method: 'PUT',
      data: {
        accountId: account.accountId,
        walletAddress: account.walletAddress,
        bio: account.bio,
        followers: account.followers,
        following: account.following,
        avatarUri: avatarUri,
        bannerUri: bannerUri,
        borderUri: account.borderUri,
        accessoryUri: account.accessoryUri,
        record: account.record,
        joinDate: account.joinDate,
        reputation: account.reputation,
        friends: account.friends
      }
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
      baseURL: this.baseURI,
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
      baseURL: this.baseURI,
      method: 'POST',
      data: {
        followingAddress: followingAddress,
        followerAddress: followerAddress
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
      baseURL: this.baseURI,
      method: 'DELETE',
      params: {
        followingAddress: followingAddress,
        followerAddress: followerAddress
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
  async following(address: string): Promise<FollowInfo[] | number> {
    return await axios({
      url: 'account/'.concat(String(address)).concat('/following'),
      baseURL: this.baseURI,
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
  async followers(address: string): Promise<FollowInfo[] | number> {
    return await axios({
      url: 'account/'.concat(String(address)).concat('/followers'),
      baseURL: this.baseURI,
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
      baseURL: this.baseURI,
      method: 'GET',
    }).then(async (response: any) => {
      const index = response.data.items.findIndex((followInfo: FollowInfo) => {
        if (Number(followInfo.followingAddress) === Number(followingAddress)) {
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

  // ********************
  // END BACKEND
  //  ********************
}
