import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";
import { Heroe } from "../../interfaces/Heroe.interface";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe:Heroe;

  constructor(  private activatedRoute:ActivatedRoute,
                private _heroeService:HeroesService ) {
    this.activatedRoute.params.subscribe(params => {      
        this.heroe  =  this._heroeService.getHeroe(params['id']);  
    });
  }

  ngOnInit() {
  }
}
