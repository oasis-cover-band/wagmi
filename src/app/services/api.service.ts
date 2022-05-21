import { Injectable } from '@angular/core';
import { AccountInfo } from '../classes/accountInfo';
import axios from 'axios';

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
        console.log(response.data);
        this.accounts[address] = response.data;
        return await response.data;
      })
      .catch(async (error: any) => {
        // handle error
        console.log(error);
        return await error.response.status;
      })
    } else {
      return this.accounts[address];
    }
  }
  // 
  // PUT
  // 
  async updateAccount(address: string, force: boolean = false): Promise<AccountInfo | number> {
    if (force || (this.accounts[address] === null || this.accounts[address] === undefined)) {
      console.log(address);
      return await axios({
        url: 'account/'.concat(String(address)),
        baseURL: this.baseURL,
        method: 'PUT' 
      }).then(async (response: any) => {
        // handle success
        console.log(response);
        this.accounts[address] = response.data;
        return await response.data;
      })
      .catch(async (error: any) => {
        // handle error
        console.log(error.response);
        return await error.response.status;
      })
    } else {
      return this.accounts[address];
    }
  }
  // 
  // POST
  // 
  async createAccount(address: string, force: boolean = false): Promise<AccountInfo | number> {
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
      joinDate: '',
      reputation: 0,
      friends: []
    }
    if (force || (this.accounts[address] === null || this.accounts[address] === undefined)) {
      return await axios({
        url: 'account/'.concat(String(address)),
        baseURL: this.baseURL,
        method: 'POST',
        params: newAccount
      }).then(async (response: any) => {
        // handle success
        console.log(response);
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
  edit(address: string , edit: {
    accountId: '',
    avatarUri: '',
    bannerUri: '',
    bio: ''
  }) {
    
  }
  closeAlert(address: string , alertId: number) {
    
  }
  followAddress(address0: string , address1: string ) {
    
  }
  unfollowAddress(address0: string , address1: string ) {
    
  }
  isAddressFollowingAddress(address0: string , address1: string ): boolean {
    return true;
  }
  getAlerts(address: string): number[] {
    // essentially just returns the account's alerts - not entire object
    // would be dope to have this as a stream that i can "subscribe/observe" to
    return [0]
  }
}
