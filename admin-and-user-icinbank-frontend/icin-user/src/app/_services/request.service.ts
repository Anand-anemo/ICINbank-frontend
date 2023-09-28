import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChequebookResponse } from '../_model/chequebookresponse';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  ROOT_URL:String = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  insertRequest(accNo: number,pages:number=20) {
    var body = {
      account: accNo,
      no_of_pages: pages, 
    }
    console.log(body);
    return this.httpClient.post<ChequebookResponse>(this.ROOT_URL + '/cheque/request', body);
  }
}
