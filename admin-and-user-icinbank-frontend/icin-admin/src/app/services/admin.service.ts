import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckbookRequest } from '../model/checkbookrequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  id!: number;

  readonly rootUrl = 'http://localhost:8080/user/';
  
  readonly dataUrl= 'http://localhost:8080/chequebook/request/all';
  readonly url = 'http://localhost:8080/';
  private data:any=[]

  constructor(private _http:HttpClient) { }

  // <---------------------checkbook request services--------------->
  confirmCheckbookService(account: any){
    return this._http.get(this.rootUrl + account + '/chequebook/request/confirm');
  }
  
  
  getRequestsData():Observable<CheckbookRequest[]> {
    return this._http.get<CheckbookRequest[]>(this.dataUrl);
  }

  // <-------------------user services-------------------------->

  public getAllUsers(){
    return this._http.get<any[]>(this.url+"user/all");
  }

  // <=======================enable and disable services=======================>
  disableLoginService(username: string){
    return this._http.get(this.rootUrl + username + '/disable');
  }

  enableLoginService(username: string){
    return this._http.get(this.rootUrl + username + '/enable');
  }
// =====================set feature service=========================

  setFeatures(username: string,value:  number){
    this.id=value
    console.log(this.id)
    return this._http.get(this.rootUrl + username + '/features/' + value);
  }

  

}
