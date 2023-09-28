import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransferHistory } from '../_model/transferhistory';

@Injectable({
  providedIn: 'root'
})
export class HistorytransferService {
  private url!: String;
  constructor(private httpClient: HttpClient) {
    this.url="http://localhost:8080"
   }

   public getTransferHistory(accNo:any):Observable<TransferHistory[]>{
    return this.httpClient.get<TransferHistory[]>(this.url+"/account/getTransfers/"+accNo);
  }
}
