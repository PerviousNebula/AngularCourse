import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey:string;
  private url:string;

  constructor(private jsonp:Jsonp) { 
    this.apiKey  =  "132f74246a035e4d4a2652408f43b4f4";
    this.url     =  "https://api.themoviedb.org/3";
  }

  public getMovie(movieId:number):Observable<any> {
    return this.jsonp.get(`${this.url}/movie/${movieId}?api_key=${this.apiKey}&language=es-MX&callback=JSONP_CALLBACK`)
                     .pipe(map((data:any) => data._body));
  }

  public getPopular():Observable<any> {
    return this.jsonp.get(`${this.url}/movie/popular?api_key=${this.apiKey}&language=es-MX&page=1&callback=JSONP_CALLBACK`)
                     .pipe(map((data:any) => data._body.results));
  }

  public getNewReleases():Observable<any> {
    return this.jsonp.get(`${this.url}/movie/upcoming?api_key=${this.apiKey}&language=es-MX&page=1&callback=JSONP_CALLBACK`)
                     .pipe(map((data:any) => data._body.results));
  }

  public getCinemaListings():Observable<any> {
    const endDate    =  new Date().toISOString().slice(0,10);        
    return this.jsonp.get(`${this.url}/discover/movie?api_key=${this.apiKey}&language=es-MX&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.lte=${endDate}&callback=JSONP_CALLBACK`)
                     .pipe(map((data:any) => data._body.results));
  }

  public getMoviesForKids():Observable<any> {
    return this.jsonp.get(`${this.url}/discover/movie?api_key=${this.apiKey}&certification_country=MX&certification.lte=G&sort_by=popularity.desc&callback=JSONP_CALLBACK`)
                     .pipe(map((data:any) => data._body.results));
  }

  public getFilteredMovie(filter:string):Observable<any> {
    return this.jsonp.get(`${this.url}/search/movie?api_key=${this.apiKey}&language=es-MX&query=${filter}&page=1&include_adult=false&callback=JSONP_CALLBACK`)
                     .pipe(map((data:any) => data  =  data._body.results));
  }
}
