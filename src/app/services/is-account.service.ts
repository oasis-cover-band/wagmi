import { Injectable } from '@angular/core';
import { AccountInfo } from '../classes/accountInfo';

@Injectable({
  providedIn: 'root'
})
export class IsAccountService {

  constructor() { }

  isAccount(response: AccountInfo | number): response is AccountInfo {
    return (response as AccountInfo).friends !== undefined;
  }
}
