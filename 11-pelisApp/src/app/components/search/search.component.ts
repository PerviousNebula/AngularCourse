import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public filter:string;
  public movies:any[];
  public loading:boolean;

  constructor(private _ps:PeliculasService,
              private router:Router,
              private ar:ActivatedRoute) { 
    this.filter  =  this.ar.snapshot.paramMap.get("filter");
    this.movies  =  []; 
    this.loading =  false; 
    if(this.filter) {
      this.loading  =  true;
      this._ps.getFilteredMovie(this.filter).subscribe((data:any[]) => { 
        this.movies  =  data.splice(0,10); 
        setTimeout(() => this.loading =  false, 1000);      
      });                      
    }
  }

  ngOnInit() { }

  public filterMovies():void {
    this.loading  =  true;
    this._ps.getFilteredMovie(this.filter).subscribe((data:any[]) => {
      this.movies  =  data.splice(0,10);
      setTimeout(() => this.loading =  false, 1000);      
    });        
  }

  public showMovie(movieId:number):void {
    this.router.navigate(['movie',movieId,'search',this.filter]);
  }

}
