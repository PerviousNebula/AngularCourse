import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string;
  private apiKey:string;
  private token:string;  

  constructor(private http:HttpClient, 
              private router:Router) { 
    this.url     =  "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
    this.apiKey  =  "AIzaSyC7fFVmsPjKcxgL5t0sdLbBMZXMibdDPOg";    
    this.getToken();
  }

  public login(user:UsuarioModel) {
    const authData  =  { ...user, returnSecureToken:true };
    return this.http.post(`${this.url}verifyPassword?key=${this.apiKey}`, authData).pipe(map(data => {
      this.setToken(data['idToken']);
      return data;
    }));    
  }

  public logout() { 
    localStorage.removeItem("token"); 
    localStorage.removeItem("expiricyDateToken"); 
    this.router.navigateByUrl("/login");
  }
  
  public signup(user:UsuarioModel) {
    const authData  =  { ...user, returnSecureToken:true };
    return this.http.post(`${this.url}signupNewUser?key=${this.apiKey}`, authData).pipe(map(data => {
      this.setToken(data['idToken']);
      return data;
    })); ;    
  }

  private setToken(token:string) {
    this.token  =  token;
    localStorage.setItem("token",token);

    let currentDate  =  new Date();
    currentDate.setSeconds(3600);
    localStorage.setItem("expiricyDateToken",currentDate.getTime().toString());
  }

  private getToken():string {
    if(localStorage.getItem("token")) {
      this.token  =  localStorage.getItem("token");    
      return this.token;
    } else
      this.token  = "";
    return this.token;
  }

  public isAuthenticated():boolean { 
    const tokenExpiricyDate  =  Number(localStorage.getItem("expiricyDateToken"));
    let currentDate  =  new Date();
    currentDate.setTime(tokenExpiricyDate);

    return (this.token.length > 2 && (currentDate > new Date())) ? true : false;
  }

}
