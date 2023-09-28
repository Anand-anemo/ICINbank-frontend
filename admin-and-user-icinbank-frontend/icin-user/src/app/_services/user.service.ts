import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDisplay } from '../_model/userdisplay';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url!: String;
  constructor(private httpClient: HttpClient) {  this.url="http://localhost:8080"}

  public getUser(username:any):Observable<UserDisplay>{
    return this.httpClient.get<UserDisplay>(this.url+"/home/"+username);
  }
}
