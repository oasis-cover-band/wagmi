import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubgraphService {
  subgraphURI: string = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3/";
  tempDate = new Date();
  currentDay = (new Date(this.tempDate.getUTCFullYear(), this.tempDate.getUTCMonth(), this.tempDate.getUTCDate()).getTime()) / 10000;

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
      return result.data;
      // this.rates = result?.data?.rates;
      // this.loading = result.loading;
      // this.error = result.error;
    });
  }
  async pair(address: string): Promise<any> {
   
  }
  async topPoolsAllTime(limit: number, orderBy: string, newerThan: number = 0, array: BehaviorSubject<any[]>): Promise<any> {
    return await this.apollo
    .watchQuery({
      query: gql`
        {
          pools(first: ${limit}, orderBy: ${orderBy}, orderDirection: desc, where: {
              createdAtTimestamp_gt: ${newerThan}
            } ) {
            id
            liquidityProviderCount
            poolHourData {
              feeGrowthGlobal0X128
              feeGrowthGlobal1X128
              volumeUSD
            }
            poolDayData {
              feeGrowthGlobal0X128
              feeGrowthGlobal1X128
              volumeUSD
            }
            token0 {
              name
              symbol
              derivedETH
            }
            token1 {
              name
              symbol
              derivedETH
            }
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      array.next(result.data.pools);
      // this.rates = result?.data?.rates;
      // this.loading = result.loading;
      // this.error = result.error;
    });
  }
  async topPoolsDaily(limit: number = 100, orderBy: string, minimumLiquidity: number = 0, minimumVolume: number = 0, array: BehaviorSubject<any[]>, double: boolean = false): Promise<any> {
    this.apollo
    .watchQuery({
      query: gql`
        {
          poolDayDatas(first: ${limit}, orderBy: ${orderBy}, orderDirection: desc, where: {
              liquidity_gt: ${minimumLiquidity},
              volumeUSD_gt: ${minimumVolume},
              date_gt: ${this.currentDay}
            } ) {
            id
            volumeUSD
            pool {
              id
              token0 {
                name
                symbol
              }
              token1 {
                name
                symbol
              }
            }
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      if (double) {
        array.next(result.data.poolDayDatas.concat(result.data.poolDayDatas));
      } else {
        array.next(result.data.poolDayDatas);
      }
      // this.rates = result?.data?.rates;
      // this.loading = result.loading;
      // this.error = result.error;
    });
  }
  async topPoolsHourly(limit: number = 100, orderBy: string, minimumLiquidity: number = 0, minimumTxCount: number = 0, array: BehaviorSubject<any[]>, double: boolean = false): Promise<any> {
    this.apollo
    .watchQuery({
      query: gql`
        {
          poolHourDatas(first: ${limit}, orderBy: ${orderBy}, orderDirection: desc, where: {
              liquidity_gt: ${minimumLiquidity},
              txCount_gt: ${minimumTxCount},
              periodStartUnix_gt: ${this.currentDay}
            } ) {
            id
            txCount
            pool {
              id
              token0 {
                name
                symbol
              }
              token1 {
                name
                symbol
              }
            }
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      if (double) {
        array.next(result.data.poolHourDatas.concat(result.data.poolHourDatas));
      } else {
        array.next(result.data.poolHourDatas);
      }
      // this.rates = result?.data?.rates;
      // this.loading = result.loading;
      // this.error = result.error;
    });
  }

  // ********************
  // END SUBGRAPH
  //  ********************

}
