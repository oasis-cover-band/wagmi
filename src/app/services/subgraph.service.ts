import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubgraphService {
  subgraphURL: string = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3/";

  constructor() { }

  // ********************
  // START SUBGRAPH
  //  ********************
  async token(address: string): Promise<any> {
    // 
  }
  async pair(address: string): Promise<any> {
   
  }

  // ********************
  // END SUBGRAPH
  //  ********************

}
