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
  getAddressBanner(address: string | null): string {
    console.log(Number(address));
    return String(Number(address) % this.maximumTextures);
  }
  followAddress(address0: string | null, address1: string | null) {
    
  }
  unfollowAddress(address0: string | null, address1: string | null) {
    
  }
  isAddressFollowingAddress(address0: string | null, address1: string | null): boolean {
    return true;
  }
  getAddressImage(address: string | null): string {
    return "../assets/dummy.png";
  }
  getAddressJoinDate(address: string | null): Date {
    return new Date();
  }
  getAddressFollowerCount(address: string | null): number {
    return 2933212;
  }
  getAddressFollowingCount(address: string | null): number {
    return 9403;
  }
  getAddressName(address: string | null): string {
    return 'Shiny Monkey';
  }
  getAddressTagline(address: string | null): string {
    return `What's good for the goose, is good for the gander. Amirite??`;
  }
  getAddressScore(address: string | null): number {
    return 3404;
  }
  getAddressBadges(address: string | null): {
    icon: string,
    description: string
}[]  {
    return [
      {
        icon: 'alert-0',
        description: 'This address has interacted with anonymizing mixers'
      },
      {
        icon: 'alert-1',
        description: 'This address has interacted with Tornado.cash.'
      },
      {
        icon: 'alert-2',
        description: 'This address has a questionable history.'
      },
      {
        icon: 'alert-3',
        description: 'This address has a very questionable history.'
      },
      {
        icon: 'alert-4',
        description: 'This address has an odd history of transfers.'
      },
      {
        icon: 'alert-5',
        description: 'This address has received funds from a flagged address.'
      },
      {
        icon: 'alert-6',
        description: 'This address has received funds from a rugpull.'
      },
      {
        icon: 'award-0',
        description: 'This address has not interacted with anonymizing mixers.'
      },
      {
        icon: 'award-1',
        description: 'This address has not interacted with anonymizing mixers.'
      },
      {
        icon: 'award-2',
        description: 'This address has not interacted with anonymizing mixers.'
      },
      {
        icon: 'chad',
        description: 'This address hodls.'
      },
      {
        icon: 'cowboy',
        description: 'This address buys into projects early using AMMs.'
      },
      {
        icon: 'pill',
        description: 'This address makes terrible AMM trades.'
      },
      {
        icon: 'influencer',
        description: 'After this address buys, many follow.'
      },
      {
        icon: 'sale',
        description: 'This address makes great AMM trades.'
      },
      {
        icon: 'sketchy',
        description: 'This address is a robot.'
      },
      {
        icon: 'sketchy-1',
        description: 'This address displays some odd behaviors.'
      },
  ];
  }
}
