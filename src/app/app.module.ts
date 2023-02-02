import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule}  from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { BadgeComponent } from './badge/badge.component';
import { TreeComponent } from './tree/tree.component';
import { TabComponent } from './tab/tab.component';
import { confirmComponent } from './auth/signup/confirm.component';
import { AuthService } from './auth/auth.service';
import { NewuserComponent } from './welcome/newuser/newuser.component';
import { OlduserComponent } from './welcome/olduser/olduser.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
  
   
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    BadgeComponent,
    TreeComponent,
    TabComponent,
    confirmComponent,
    NewuserComponent,
    OlduserComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule 
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents:[confirmComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
