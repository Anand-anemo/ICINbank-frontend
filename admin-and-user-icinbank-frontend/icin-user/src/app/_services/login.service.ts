import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ROOT_URL:String = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  loginUser(userName: string, password: string) {
    var body = {
      username: userName,
      password: password
    }
    return this.httpClient.post(this.ROOT_URL + '/login', body);
  }
}
