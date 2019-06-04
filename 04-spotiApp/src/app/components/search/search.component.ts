import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  
  searching:boolean;
  artists:any[]      =  [];

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  searchArtist(artistName:string):any {  
    this.searching  =  true;      
    if(artistName.length) 
      this._spotifyService.getSearchedArtists(artistName).subscribe((data:any) => {      
        this.artists    =  data;            
      });           
    setTimeout(() => {
      this.searching  =  false;
    },500);
  }
}
