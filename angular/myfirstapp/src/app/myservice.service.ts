import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  myvar;
getdata():string {
  return "Hello Service";
}
  constructor() { }
}
