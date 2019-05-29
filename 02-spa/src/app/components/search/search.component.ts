import { Component, OnInit } from '@angular/core';
import { Heroe } from "../../interfaces/Heroe.interface";
import { Router,ActivatedRoute } from '@angular/router'
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  termino:string;
  heroesResult:Heroe[]  =  [];
  
  constructor( private router:Router,
               private _activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService ) {     
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino       =   params['termino'];
      this.heroesResult  =   this._heroesService.searchHeroe(params['termino']);      
    });
  }

  showHeroe(id) {
    this.router.navigate(['heroe',id]);
  }

}
