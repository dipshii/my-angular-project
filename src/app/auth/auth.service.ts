import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import {Subject} from "rxjs";
import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
@Injectable()

export class AuthService{
    private user!:User;
    authChange=new Subject<boolean>();
    constructor(private router:Router){}
    registerUser(authData:AuthData){
        this.user={
            email:authData.email,
            userid:Math.round(Math.random()*100).toString()

        };
        this.authSuccess()
       

    }
    login(authData:AuthData){
        this.user={
            email:authData.email,
            userid:Math.round(Math.random()*100).toString()

        };
       this.authSuccess()
    }

    logout(){
        this.user=null;
        this.authChange.next(false);
        this.router.navigate(['/login'])
    }

    getUser(){
        return {...this.user};
    }
    isAuth(){
        return this.user!=null
    }
    private authSuccess(){
        this.authChange.next(true);
        this.router.navigate(['/welcome'])

    }
}