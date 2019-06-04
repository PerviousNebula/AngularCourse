import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  loading:boolean   =  true;
  releases:any[]    =  [];

  constructor(private _spotifyService:SpotifyService) { 
    this._spotifyService.getNewReleases().subscribe((data:any) => {
      this.releases  =  data;         
      this.loading   =  false;
    });
  }

  ngOnInit() {
  }

}
