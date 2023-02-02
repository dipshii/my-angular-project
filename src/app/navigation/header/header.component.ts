import { OnInit } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  @Output() sidenav=new EventEmitter<void>();
  isAuth:boolean=false
  authSubscription:Subscription
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.authService.authChange.subscribe(authStatus=>{
      this.isAuth=authStatus;
    }
      )
  }
  onToggleSidenav(){
    this.sidenav.emit();
  }
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
  onLogout(){
    this.authService.logout();
  }
}
