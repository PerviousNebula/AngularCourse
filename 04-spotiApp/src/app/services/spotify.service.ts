import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  accessToken:string  =  "BQAoMAb1_ikhmae0_O3C7wEnMxaTF1s5DIEsS5FYW4IQ0gQC5GIQxlGGrgS0XXgG6o4fElXfmqBp5bubpiM";

  constructor(private httpCliente:HttpClient) {}

  getQuery(query:string) {
    const url:string           =  `https://api.spotify.com/v1/${query}`;
    const headers:HttpHeaders  =  new HttpHeaders({'Authorization': `Bearer ${this.accessToken}`});    
    return this.httpCliente.get(url,{headers});
  }

  getNewReleases():any {
    return this.getQuery("browse/new-releases?country=MX&limit=20&offset=5").pipe(map(data => data['albums'].items));
  }

  getSearchedArtists(artistName:string):any {    
    return this.getQuery(`search?q=${artistName}&type=artist&limit=20&offset=5`).pipe(map(data => data['artists'].items));
  }

  getArtist(id:string):any {
    return this.getQuery(`artists/${id}`);
  }

  getArtistTopTracks(id:string):any {
    return this.getQuery(`artists/${id}/top-tracks?country=MX`).pipe(map(data  =>  data['tracks']));
  }
}
