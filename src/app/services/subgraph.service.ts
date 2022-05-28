import { Injectable } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubgraphService {
  subgraphURI: string = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3/";
  tempDate = new Date();
  currentDay = (new Date(Date.UTC(this.tempDate.getUTCFullYear(), this.tempDate.getUTCMonth(), this.tempDate.getUTCDate(), 0, 0, 0)).getTime()) / 1000;
  currentHour = (new Date(Date.UTC(this.tempDate.getUTCFullYear(), this.tempDate.getUTCMonth(), this.tempDate.getUTCDate(), this.tempDate.getUTCHours() - 1)).getTime()) / 1000;
  constructor(
    private apollo: Apollo
  ) {
  }

  // ********************
  // START SUBGRAPH
  //  ********************
  async search(searchTerm: string,
    tokenAddressItem: BehaviorSubject<any>,
    tokenSymbolItem: BehaviorSubject<any>,
    tokenNameItem: BehaviorSubject<any>,
    poolAddressItem: BehaviorSubject<any>) {
    
    this.apollo
    .watchQuery({
      query: gql`
        {
          tokens(first: 3, orderBy: volumeUSD, orderDirection: desc, where: {
              id_gte: "${searchTerm}"
            }
          ) {
            id
            symbol
            name
            totalSupply
            derivedETH
            whitelistPools (first: 1, orderBy: volumeUSD, orderDirection: desc) {
              id
              volumeUSD
            }
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      tokenAddressItem.next(result.data.tokens);
    });
    
    this.apollo
    .watchQuery({
      query: gql`
        {
          tokens(first: 3, orderBy: volumeUSD, orderDirection: desc, where: {
              symbol_contains: "${searchTerm}"
            }
          ) {
            id
            symbol
            name
            totalSupply
            derivedETH
            whitelistPools (first: 1, orderBy: volumeUSD, orderDirection: desc) {
              id
              volumeUSD
            }
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      tokenSymbolItem.next(result.data.tokens);
    });

    this.apollo
    .watchQuery({
      query: gql`
        {
          tokens(first: 3, orderBy: volumeUSD, orderDirection: desc, where: {
              name_contains: "${searchTerm}"
            }
          ) {
            id
            symbol
            name
            totalSupply
            derivedETH
            whitelistPools (first: 1, orderBy: volumeUSD, orderDirection: desc) {
              id
              volumeUSD
            }
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      tokenNameItem.next(result.data.tokens);
    });

    this.apollo
    .watchQuery({
      query: gql`
        {
          pools(first: 3, orderBy: volumeUSD, orderDirection: desc, where: {
              id_gte: "${searchTerm}"
            }
          ) {
            id
            volumeUSD
            token0Price
            token0 {
              id
              name
              symbol
            }
            token1Price
            token1 {
              id
              name
              symbol
            }
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      poolAddressItem.next(result.data.pools);
    });
  }
  async token(address: string, item: BehaviorSubject<any>): Promise<any> {
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
            whitelistPools (orderBy: volumeUSD, orderDirection: desc) {
              id
              createdAtTimestamp
              createdAtBlockNumber
              volumeUSD
              totalValueLockedUSD
              token0 {
                id
                symbol
              }
              token1 {
                id
                symbol
              }
            }
            tokenDayData (orderBy: date, orderDirection: desc) {
              id
              date
              volume
              volumeUSD
              untrackedVolumeUSD
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
      item.next(result.data.token);
    });
  }

  async pool(address: string, item: BehaviorSubject<any>): Promise<any> {

  // ********************
  // TOKEN0PRICE and TOKEN1PRICE ARE MIXED UP!!
  //  ********************
    return await this.apollo
    .watchQuery({
      query: gql`
        {
          pool(id: "${address}") {
            id
            token0 {
              id
              name
              symbol
            }
            token1 {
              id
              name
              symbol
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
            poolDayData (orderBy: date, orderDirection: desc) {
              id
              date
              token0Price
              token1Price
              volumeToken0
              volumeToken1
              volumeUSD
              feesUSD
              txCount
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
      item.next(result.data.pool);
    });
  }
  // async poolDayData(address: string, item: BehaviorSubject<any>): Promise<any> {
  //   console.log(address);
  //   return await this.apollo
  //   .watchQuery({
  //     query: gql`
  //       {
  //         poolDayData(orderBy: date, where: {
  //          pool.id: "${address}"
  //         }) {
  //           id
  //           date
  //         }
  //       }
  //     `,
  //   })
  //   .valueChanges.subscribe((result: any) => {
  //     console.log(result.data);
  //     item.next(result.data.pool);
  //   });
  // }
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
    return await this.apollo
    .watchQuery({
      query: gql`
        {
          poolDayDatas(first: ${limit}, orderBy: ${orderBy}, orderDirection: desc, where: {
              liquidity_gt: ${minimumLiquidity},
              volumeUSD_gt: ${minimumVolume},
              date: ${this.currentDay}
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
              periodStartUnix: ${this.currentHour}
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
