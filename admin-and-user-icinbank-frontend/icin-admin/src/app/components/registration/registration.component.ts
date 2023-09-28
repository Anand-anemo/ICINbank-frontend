import { Component, OnInit } from '@angular/core';
import { AuthorizeUser } from 'src/app/model/authorizedUser';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // authorizeusers:AuthorizeUser[]=[];
    authorizeusers:any=[];
  constructor(public authorizeService: AuthorizationService){}
  ngOnInit(): void {
    this.authorizeService.getRequestData().subscribe(res=>{
      console.log(res);
      this.authorizeusers = res});
  }

  authorizeAccount(username: string){
    this.authorizeService.authorizeAccount(username).subscribe(res=>this.ngOnInit());
  }

  rejectRequest(username: string){
    this.authorizeService.rejectRequest(username).subscribe(res=>this.ngOnInit());
  }

}
