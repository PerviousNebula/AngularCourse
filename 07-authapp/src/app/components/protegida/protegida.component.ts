import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../services/auth0.service';


@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html'
})
export class ProtegidaComponent implements OnInit {

  public profile:any;

  constructor(public _auth0Service:Auth0Service) { }

  ngOnInit() {
    if (this._auth0Service.userProfile) {
      this.profile = this._auth0Service.userProfile;      
    } else {
      this._auth0Service.getProfile((err, profile) => {
        this.profile = profile;        
      });
    }
  }

}
