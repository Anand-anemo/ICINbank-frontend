import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HomeComponent } from './components/home/home.component';
import { RequestChequeBookComponent } from './components/request-cheque-book/request-cheque-book.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { TransferBtwAccountComponent } from './components/transfer-btw-account/transfer-btw-account.component';
import { TransferHistoryComponent } from './components/transfer-history/transfer-history.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  }
  ,
  {path:'edit_profile',component:EditProfileComponent},
  {path:'home',component:HomeComponent},
  {path:'request_chequebook',component:RequestChequeBookComponent},
  {path:'transaction_History',component:TransactionHistoryComponent},
  {path:'transfer',component:TransferBtwAccountComponent},
  {path:'transfer_history',component:TransferHistoryComponent},
  {
    path:'deposit',component:DepositComponent
  },
  {
    path:'withdraw',component:WithdrawComponent
  },
   { path: '**', redirectTo: '/login' }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
