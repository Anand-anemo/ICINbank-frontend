import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  ROOT_URL:String = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  insertEntry(username:string, saccount:string,ifscNo:string,raccount:string,amount:number) {
    var body = {
      username:username,
      saccount: saccount,
      ifsc: ifscNo, 
      raccount:raccount,
      amount:amount
    }
    console.log(body);
    return this.httpClient.post(this.ROOT_URL + '/account/transfer', body);
  }
}
