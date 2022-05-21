import { Injectable } from '@angular/core';
import { User } from './classes/user';

@Injectable({
  providedIn: 'root'
})
export class IsUserService {

  constructor() { }

  isUser(response: User | number): response is User {
    return (response as User).friends !== undefined;
  }
}
