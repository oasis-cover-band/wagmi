import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subgraphName'
})
export class SubgraphNamePipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    let returnVal;
    if (value === 'token0Price') {
      ///  <!-- TOKEN0PRICE AND TOKEN1PRICE ARE REVERSED VIA SUBGRAPH FOR SOME REASON -->
      returnVal = 'Price ('.concat(args[0][1]).concat(')');
    } else if (value === 'token1Price') {
      ///  <!-- TOKEN0PRICE AND TOKEN1PRICE ARE REVERSED VIA SUBGRAPH FOR SOME REASON -->
      returnVal = 'Price ('.concat(args[0][0]).concat(')');
    } else if (value === 'derivedETH') {
      returnVal = 'Price (ETH)';
    } else if (value === 'volumeUSD') {
      returnVal = 'Volume (USD)';
    } else if (value === 'volumeToken0') {
      returnVal = 'Volume ('.concat(args[0][0]).concat(')');
    } else if (value === 'volumeToken1') {
      returnVal = 'Volume ('.concat(args[0][1]).concat(')');
    } else if (value === 'feesUSD') {
      returnVal = 'Fees (USD)'
    } else if (value === 'collectedFeesToken0') {
      returnVal = 'Fees ('.concat(args[0][0]).concat(')');
    } else if (value === 'collectedFeesToken1') {
      returnVal = 'Fees ('.concat(args[0][1]).concat(')');
    } else if (['totalValueLockedUSD', 'totalValueLockedUSDUntracked'].indexOf(value) !== -1) {
      returnVal = 'TVL (USD)';
    } else if (value === 'totalValueLockedToken0') {
      returnVal = 'TVL ('.concat(args[0][0]).concat(')');
    } else if (value === 'totalValueLockedToken1') {
      returnVal = 'TVL ('.concat(args[0][1]).concat(')');
    } else if (value === 'txCount') {
      returnVal = 'TXs'
    }
    return returnVal;
  }

}
