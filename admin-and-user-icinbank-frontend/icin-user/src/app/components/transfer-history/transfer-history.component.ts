import { Component, OnInit } from '@angular/core';
import { TransferHistory } from 'src/app/_model/transferhistory';
import { HistorytransferService } from 'src/app/_services/historytransfer.service';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent implements OnInit{
  private accNo:number =+localStorage.getItem("savingAccNo")!;
  public transferList: Array<TransferHistory> = [];
  constructor(private transferService:HistorytransferService){}
  ngOnInit(): void {
    this.transferService.getTransferHistory(this.accNo).subscribe((res: TransferHistory[])=>{
      this.transferList=res;
    });
  }

}
