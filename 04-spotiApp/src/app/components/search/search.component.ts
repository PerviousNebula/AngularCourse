import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { Error } from "../../interfaces/error";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  
  error:Error;  
  searching:boolean;
  artists:any[]      =  [];

  constructor(private _spotifyService:SpotifyService) { 
    this.error  =  {
      status:false,
      code:0,
      msg:"Something went wrong!"
    };    
  }

  ngOnInit() {
  }

  searchArtist(artistName:string):any {  
    this.searching  =  true;      
    if(artistName.length) 
      this._spotifyService.getSearchedArtists(artistName).subscribe((data:any) => {      
        this.artists    =  data;            
      },(fail:any) => {
        this.searching    =  false;
        this.error.status =  true; 
        this.error.code   =  fail.error.error.status;     
        this.error.msg    =  fail.error.error.message;   
      });           
    setTimeout(() => {
      this.searching  =  false;
    },500);
  }
}
