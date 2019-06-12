import { Injectable } from '@angular/core';
import { Auth0Service } from './auth0.service';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public _auth0Service:Auth0Service,
              public router:Router) { }

  canActivate(): boolean {
    if (!this._auth0Service.isAuthenticated()) {
        this.router.navigate(['']);
        console.error("Bloqueado por el guard!");
        return false;
      }
    return true;
  }
}
