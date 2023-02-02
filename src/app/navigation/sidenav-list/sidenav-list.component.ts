import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent {
  @Output() closesidenav=new EventEmitter()
  isAuth:boolean=true;
  constructor(private authService:AuthService){
    this.authService.authChange.subscribe(authStatus=>{
      this.isAuth=authStatus
    });
  }
  ngOnInit(){

  }
  onClose(){
      this.closesidenav.emit()
  }

}
