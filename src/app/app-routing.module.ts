import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BadgeComponent } from './badge/badge.component';
import { TabComponent } from './tab/tab.component';
import { NewuserComponent } from './welcome/newuser/newuser.component';
import { OlduserComponent } from './welcome/olduser/olduser.component';

import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'welcome',component:WelcomeComponent,canActivate: [AuthGuard]},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'badge',component:BadgeComponent},
  {path:'tab',component:TabComponent},
  {path:'newuser',component:NewuserComponent},
  {path:'olduser',component:OlduserComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
