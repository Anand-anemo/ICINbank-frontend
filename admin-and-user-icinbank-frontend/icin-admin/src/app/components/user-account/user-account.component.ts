import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  roles = [
    {name: " ", value:0},
    { name: "Deposit Access", value: 1 },
    { name: "Deposit + Withdraw Access", value: 2 },
    { name: "Deposit + Withdraw + Transfer Access", value: 3 }
  ]

  selectedValue:any;

  users: any[]=[]
  constructor(private _adminService:AdminService){}
  ngOnInit(): void {

    this._adminService.getAllUsers().subscribe(res => {
      console.log(res)
     //console.log(res[0].featureStatus)
     res.forEach(element => {

       console.log(element.featureStatus)
      // console.log(this.roles[1].name)
       if(element.featureStatus == 1){
         element.featureStatus = this.roles[1].name
       }
       if (element.featureStatus == 2) {
        element.featureStatus = this.roles[2].name
       }
       if (element.featureStatus == 3) {
        element.featureStatus = this.roles[3].name
       }
     }); 
     this.users = res
     
    });
    
  }

  filterSelected(selectedValue: any){
    this.selectedValue = selectedValue.target.value;
    console.log('selected value= '+selectedValue);
  }

  enableLoginService(username: any) {
    console.log(username)
    this._adminService.enableLoginService(username).subscribe((res: any) => this.ngOnInit());
    //this.enableService.enableLoginService();
  }

  disableLoginService(username: any) {
    this._adminService.disableLoginService(username).subscribe((res: any) => this.ngOnInit());
    //this.disableService.disableLoginService();
  }

  setOption(username: any) {

    this._adminService.setFeatures(username, this.selectedValue).subscribe((res: any) => this.ngOnInit());
    //this.featuresService.setFeatures();
  }

}
