import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  ROOT_URL:String = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  insertUser(firstName: string, lastName: string,userName: string, password: string, dob:Date, phone: number, address: string, identityType: string,identity:string, email: string) {
    var body = { 
      fname : firstName,
      lname : lastName,
      username: userName,
      password: password,
      dob:dob,
      phone : phone,
      address : address,
      identityType:identityType,
      identity:identity,
      email : email,
    }
    return this.httpClient.post(this.ROOT_URL + '/register', body);
  }
}
