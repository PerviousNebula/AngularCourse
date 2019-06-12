import { Component, OnInit } from '@angular/core';
import { Auth0Service } from './services/auth0.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authapp';

  constructor(public auth: Auth0Service) {
    auth.handleAuthentication();    
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();      
    } 
  }
}
