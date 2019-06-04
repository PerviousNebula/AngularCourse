import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist:any       =  {};
  topTracks:any[]  =  [];
  loading:boolean  =  true;

  constructor(private _spotifyService:SpotifyService,
              private activatedRoute:ActivatedRoute) { 
                this.loading  =  true;
                this.activatedRoute.params.subscribe(params => this.showArtist(params['id']));
              }

  ngOnInit() {
  }

  showArtist(id:string):void {
    this._spotifyService.getArtist(id).subscribe(data => {
      this.artist   =  data;      
      this.getTopTracks(id);
    });
  }

  getTopTracks(id:string):void {
    this._spotifyService.getArtistTopTracks(id).subscribe(data => {
      this.topTracks  =  data;      
      this.loading    =  false;    
    });    
  }
}
