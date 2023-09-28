import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  ROOT_URL:String = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  insertEntry(account: string, amount: number) {
    var body = {
      account: account,
      amount: amount,
    };
    console.log(body);
    return this.httpClient.post(this.ROOT_URL + '/account/withdraw', body);
  }
}
