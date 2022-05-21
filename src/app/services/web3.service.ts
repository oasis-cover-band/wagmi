import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Web3 from 'web3';
declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  web3!: Web3;
  loggedIn: {
    chainId: BehaviorSubject<number>,
    walletAddress: BehaviorSubject<string>
  } = {
    chainId: new BehaviorSubject<number>(0),
    walletAddress: new BehaviorSubject<string>('')
  };

  constructor() {
    // this.connectWallet();
  }

  disconnectWallet(): void {
    // this.notificationsService.notify({
    //   title: 'Logging In',
    //   icon: 'alarm',
    //   text: 'You are attempting to login.',
    //   date: new Date()
    // });
    // this.tryProvider().then(tryProviderResult => {
    //   this.loginProcedure();
    // });
  }

  async connectWallet(): Promise<string> {
    // this.notificationsService.notify({
    //   title: 'Logging In',
    //   icon: 'alarm',
    //   text: 'You are attempting to login.',
    //   date: new Date()
    // });
    return await this.tryProvider().then(async tryProviderResult => {
      return await this.loginProcedure();
    });
  }

  async loginProcedure(): Promise<string> {
    try {
      window.ethereum.on('accountsChanged', (walletAddresses: string[]) => {
        this.loggedIn.walletAddress.next(walletAddresses[0]);
        this.web3.eth.defaultAccount = walletAddresses[0];
        // this.notificationsService.notify({
        //   title: 'Account Changed',
        //   icon: 'alarm',
        //   text: 'Please verify this account is connected to the application.',
        //   date: new Date()
        // });
      });
      return await this.requestAccounts();
    } catch (error) {
      return "";
      // this.notificationsService.notify({
      //   title: 'Login Error',
      //   icon: 'alarm',
      //   text: 'There was an error logging you in.',
      //   date: new Date()
      // });
    }
  }

  async requestAccounts(): Promise<string> {
    return await this.web3.eth.requestAccounts().then(userAddresses => {
      this.web3.eth.defaultAccount = userAddresses[0];
      this.loggedIn.walletAddress.next(userAddresses[0]);
      return userAddresses[0];
      // this.notificationsService.notify({
      //   title: 'Logged In',
      //   icon: 'alarm',
      //   text: 'You have successfully logged in.',
      //   date: new Date()
      // });
    });
  }

  async tryProvider(): Promise<any> {
    this.web3 = await new Web3(Web3.givenProvider);
    if (Web3.givenProvider) {
      this.web3 = await new Web3(Web3.givenProvider);
    } else {
      this.web3 = await new Web3(window.ethereum);
    }
    if (!this.web3.givenProvider && !this.web3.currentProvider) {
      this.web3 = await new Web3('ws://localhost:8545');
    }
    this.getChainId();
    // await this.setContracts();
  }

  async getChainId(): Promise<any> {
    this.web3.eth.getChainId().then(result => {
      this.loggedIn.chainId.next(result);
    });
  }
}
