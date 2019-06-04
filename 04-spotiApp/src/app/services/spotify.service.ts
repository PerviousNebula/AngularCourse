import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  accessToken:string  =  "BQC62ucb8O56Zyrtm8c9izlDvM5UYGDT44t957DnuwbkxSKvAfwtLR--4dBV138aYw41YwEzhLsVGagrDsw";

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
}
