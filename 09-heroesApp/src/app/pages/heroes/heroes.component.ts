import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:HeroeModel[];
  loading:boolean;

  constructor(private _heroesService:HeroesService) { 
    this.loading  =  true;    
    this._heroesService.getHeroes().subscribe((data:any) => {
      this.heroes   =  data;
      console.log(this.heroes);
      setTimeout(() => {
        this.loading  =  false;
      }, 1500);      
    });      
  }

  ngOnInit() {    
  }
}
