import { Injectable } from '@angular/core';
import { User } from './classes/user';
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
  async getUser(address: string, force: boolean = false): Promise<User | any> {
    if (force || (this.users[address] === null || this.users[address] === undefined)) {
      return await axios({
        url: 'user/'.concat(String(address)),
        baseURL: this.baseURL,
        method: 'get' 
      }).then(async (response: any) => {
        // handle success
        // console.log(response.data);
        this.users[address] = response.data;
        return await response.data;
      })
      .catch(async (error: any) => {
        // handle error
        // console.log(error);
        return await error;
      })
    } else {
      return this.users[address];
    }
  }
  getAddressBanner(address: string ): string {
    console.log(Number(address));
    return String(Number(address) % this.maximumTextures);
  }
  // 
  // POSTS
  // 
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
