import { Injectable } from '@angular/core';
import { User } from '../classes/user';
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
  users: any = {
  };
  constructor() { }

  // 
  // GETS
  // 
  async getUser(address: string, force: boolean = false): Promise<User | number> {
    if (force || (this.users[address] === null || this.users[address] === undefined)) {
      return await axios({
        url: 'account/'.concat(String(address)),
        baseURL: this.baseURL,
        method: 'get' 
      }).then(async (response: any) => {
        // handle success
        console.log(response.data);
        this.users[address] = response.data;
        return await response.data;
      })
      .catch(async (error: any) => {
        // handle error
        console.log(error);
        return await error.response.status;
      })
    } else {
      return this.users[address];
    }
  }
  // 
  // PUTS
  // 
  async setUser(address: string, force: boolean = false): Promise<User | number> {
    if (force || (this.users[address] === null || this.users[address] === undefined)) {
      return await axios({
        url: 'account/'.concat(String(address)),
        baseURL: this.baseURL,
        method: 'put' 
      }).then(async (response: any) => {
        // handle success
        console.log(response.data);
        this.users[address] = response.data;
        return await response.data;
      })
      .catch(async (error: any) => {
        // handle error
        console.log(error);
        return await error.response.status;
      })
    } else {
      return this.users[address];
    }
  }
  edit(address: string , edit: {
    userId: '',
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
    // essentially just returns the user's alerts - not entire object
    // would be dope to have this as a stream that i can "subscribe/observe" to
    return [0]
  }
}
