import { Component, OnInit } from '@angular/core';
import { Auth0Service } from 'src/app/services/auth0.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(public _auth0Service:Auth0Service) { }

  ngOnInit() { }

  show():void {
    console.log("estado:",this._auth0Service.isAuthenticated());
  }

}
