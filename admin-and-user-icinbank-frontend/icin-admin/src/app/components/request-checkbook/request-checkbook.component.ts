import { Component, OnInit } from '@angular/core';
import { CheckbookRequest } from 'src/app/model/checkbookrequest';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-request-checkbook',
  templateUrl: './request-checkbook.component.html',
  styleUrls: ['./request-checkbook.component.css']
})
export class RequestCheckbookComponent implements OnInit{
  checkbookrequests: CheckbookRequest[]=[];
  term!: string;
  
  constructor(public checkbookService: AdminService){}
  ngOnInit(): void {

    this.checkbookService.getRequestsData().subscribe(res => {
      this.checkbookrequests = res
    });
    
  }

  confirmRequest(account:any) {
    this.checkbookService.confirmCheckbookService(account).subscribe(res=>this.ngOnInit());
  }

}
