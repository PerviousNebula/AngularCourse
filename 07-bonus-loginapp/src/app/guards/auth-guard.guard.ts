import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private _authService:AuthService,
              private router:Router) { }

  canActivate():boolean {     
    if(this._authService.isAuthenticated()) 
      return true;
    else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
  
}
