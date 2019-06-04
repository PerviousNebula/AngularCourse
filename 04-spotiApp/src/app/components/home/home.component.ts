import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { Error } from "../../interfaces/error";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  loading:boolean   =  true;
  releases:any[]    =  [];
  error:Error;  

  constructor(private _spotifyService:SpotifyService) {     
    this.error  =  {
      status:false,
      code:0,
      msg:"Something went wrong!"
    };    
    this._spotifyService.getNewReleases().subscribe((data:any) => {
      this.releases  =  data;         
      this.loading   =  false;
    }, (fail:any) => {      
      this.loading      =  false;
      this.error.status =  true; 
      this.error.code   =  fail.error.error.status;     
      this.error.msg    =  fail.error.error.message;     
    });
  }

  ngOnInit() {
  }

}
