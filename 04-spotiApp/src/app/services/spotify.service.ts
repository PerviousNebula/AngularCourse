import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  accessToken:string  =  "BQB-XHu2NlhzPt2SeM4lbhHtkA36-35GzdDh-G0gdsMwa6emmaqfj5l1kwspDK9m7Z6dhBwLgz_x5M8lEfc";

  constructor(private httpCliente:HttpClient) {}

  getNewReleases():any {
    const headers  =  new HttpHeaders({'Authorization': `Bearer ${this.accessToken}`});
    return this.httpCliente.get("https://api.spotify.com/v1/browse/new-releases?country=MX&limit=20&offset=5",{headers});
  }
}
