import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  template: `
            <div [ngStyle]="{'cursor': 'pointer'}" class="card animated bounceIn" (click)="seeMore(movie.id)">
              <img [src]="movie | noimage" class="card-img-top" [alt]="movie.title">
              <div class="card-body">
                <h5 class="card-title">{{ movie.title }}</h5>
              </div>
            </div>
  `
})
export class CardComponent implements OnInit {
  @Input() movie:any;
  public currentRoute:string;

  constructor(private router:Router) { 
    this.currentRoute  =   this.router.url.substring(1,this.router.url.length);    
  }

  ngOnInit() { }

  public seeMore(movieId:number):void {
    this.router.navigate(['movie',movieId,this.currentRoute,""]);
  }

}
