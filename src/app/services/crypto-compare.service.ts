import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CryptoCompareService {

  maximumTextures = 425;
  baseURI: string = "https://min-api.cryptocompare.com/";
  apiKeys: string[] = ['39859eb77d7002ea246e2aff3a43fb115931d3d994a1872ac95f979c4f431801'];
  accounts: any = {
  };
  public coins!: any;
  constructor() { }

  async getAllCoins(): Promise<any> {
    return await axios({
      url: 'data/all/coinlist?'.concat(this.apiKeys[0]),
      baseURL: this.baseURI,
      method: 'GET',
      params: {
        summary: true
      }
    }).then(async (response: any) => {
      console.log(response.data.Data);
      this.coins = response.data.Data;
      console.log(this.coins);
    })
    .catch(async (error: any) => {
      // handle error
      return await error.response.status;
    })
  }
}
