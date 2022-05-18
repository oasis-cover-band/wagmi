import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  images = [
    "../assets/dummy.png"
  ]
  constructor() { }

  getAddressImage(address: string) {
    return "../assets/dummy.png";
  }
}
