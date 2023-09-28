import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestChequeBookComponent } from './components/request-cheque-book/request-cheque-book.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { TransferBtwAccountComponent } from './components/transfer-btw-account/transfer-btw-account.component';
import { TransferHistoryComponent } from './components/transfer-history/transfer-history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component'; 

@NgModule({
  declarations: [
    AppComponent,
    RequestChequeBookComponent,
    EditProfileComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TransactionHistoryComponent,
    TransferBtwAccountComponent,
    TransferHistoryComponent,
    DepositComponent,
    WithdrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
