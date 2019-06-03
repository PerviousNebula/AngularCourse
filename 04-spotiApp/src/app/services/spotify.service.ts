import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  accessToken:string  =  "BQBSFai78b98xxhHF4GvM8mSJLRxVMBp1NPUSAV_mBgVeY75REUJX6an_k87WuS_f2W93-6hjM7VneTgfwE";

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
