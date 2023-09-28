import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { RequestCheckbookComponent } from './components/request-checkbook/request-checkbook.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './services/guard/auth.guard';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'user-account',component:UserAccountComponent,canActivate:[AuthGuard]
  },
  {
    path:'request-checkbook',component:RequestCheckbookComponent,canActivate:[AuthGuard]
  },
  {
    path:'register',component:RegistrationComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
