import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {
  private movieId:number;  
  private componentFrom:string;
  private filter:string;
  public movie:any;
  public imgUrl:string;

  constructor(private ar:ActivatedRoute,
              private router:Router,
              private _ps:PeliculasService) { 
    this.movieId  =  Number(this.ar.snapshot.paramMap.get("id"));    
    this._ps.getMovie(this.movieId).subscribe((data:any) => { 
      this.movie  =  data;
      this.imgUrl =  `http://image.tmdb.org/t/p/w342/${data.poster_path}`;
    });
    this.componentFrom  =  this.ar.snapshot.paramMap.get("path");
    this.filter         =  this.ar.snapshot.paramMap.get("filter");
  }

  ngOnInit() { }

  public goBack():void {
    this.router.navigate([this.componentFrom,this.filter]);
  }
}
