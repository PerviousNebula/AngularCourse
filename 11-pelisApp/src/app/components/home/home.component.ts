import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .jb-bg {
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,42,0,1) 35%, rgba(0,212,255,1) 100%);
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        color: white;
      }
      .font-qs-title {
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  releases:any[];
  cinemaListings:any[];
  kidsMovies:any[];

  constructor(public _ps:PeliculasService) { }

  ngOnInit() {
    this._ps.getNewReleases().subscribe((data:any[]) => this.releases           =  data);
    this._ps.getCinemaListings().subscribe((data:any[]) => this.cinemaListings  =  data);        
    this._ps.getMoviesForKids().subscribe((data:any[]) => this.kidsMovies       =  data);        
  }

}
