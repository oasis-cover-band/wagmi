import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
@Injectable({
  providedIn: 'root'
})
export class SubgraphService {
  subgraphURI: string = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3/";

  constructor(
    private apollo: Apollo
  ) { }

  // ********************
  // START SUBGRAPH
  //  ********************
  async token(address: string): Promise<any> {
    this.apollo
    .watchQuery({
      query: gql`
        {
          token(id: "${address}") {
            id
            symbol
            name
            decimals
            totalSupply
            volume
            volumeUSD
            untrackedVolumeUSD
            feesUSD
            txCount
            poolCount
            totalValueLocked
            totalValueLockedUSD
            totalValueLockedUSDUntracked
            derivedETH
            whitelistPools {
              id
            createdAtTimestamp
            createdAtBlockNumber
            token0 {
              id
            }
            token1 {
              id
            }
            feeTier
            liquidity
            sqrtPrice
            feeGrowthGlobal0X128
            feeGrowthGlobal1X128
            token0Price
            token1Price
            tick
            observationIndex
            volumeToken0
            volumeToken1
            volumeUSD
            untrackedVolumeUSD
            feesUSD
            txCount
            collectedFeesToken0
            collectedFeesToken1
            collectedFeesUSD
            totalValueLockedToken0
            totalValueLockedToken1
            totalValueLockedETH
            totalValueLockedUSD
            totalValueLockedUSDUntracked
            liquidityProviderCount
          }
          tokenDayData {
            id
            date
            token {
              id
            }
            volume
            volumeUSD
            untrackedVolumeUSD
            totalValueLocked
            totalValueLockedUSD
            priceUSD
            feesUSD
            open
            high
            low
            close
          }
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      console.log(result);
      // this.rates = result?.data?.rates;
      // this.loading = result.loading;
      // this.error = result.error;
    });
  }
  async pair(address: string): Promise<any> {
   
  }

  // ********************
  // END SUBGRAPH
  //  ********************

}
