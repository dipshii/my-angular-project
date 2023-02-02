import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { confirmComponent } from './confirm.component';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  maxDate!:Date;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor(private dialog:MatDialog,private authService:AuthService){}
  ngOnInit() {
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    
  }
  OnSubmit(form:NgForm){
  
    this.authService.registerUser({
      email:form.value.email,
      password:form.value.password
    })
  
  }
  again_confirm(){
    this.dialog.open(confirmComponent)
  }

  
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
  }

