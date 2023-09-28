import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../_model/transaction';
import { SavingAccount } from '../_model/savingaccount';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url!: String;

  constructor(private httpClient: HttpClient) {
    this.url="http://localhost:8080"
   }

   public getTransactions(accNo: any):Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(this.url+"/account/getHistory/"+accNo);
  }
  public getSavingAccount(username: string):Observable<SavingAccount>{
    return this.httpClient.get<SavingAccount>(this.url+"/account/getsaving/"+username);
  }
}
