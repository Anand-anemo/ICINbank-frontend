import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthorizeUser } from '../model/authorizedUser';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  readonly rootUrl = 'http://localhost:8080/user/';

  constructor(private _http:HttpClient) { }

  getRequestData(){
    return this._http.get<AuthorizeUser[]>(this.rootUrl + 'unauthorized/all');
  }
  
  authorizeAccount(username: string){
    return this._http.get(this.rootUrl + username + '/authorize');
  }
   
  rejectRequest(username: string){
    return this._http.get(this.rootUrl + username + '/authorize/cancel' );
  
  }
}
