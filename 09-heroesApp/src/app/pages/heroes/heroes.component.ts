import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:HeroeModel[];
  loading:boolean;

  constructor(private _heroesService:HeroesService) { 
    this.loading  =  true;        
  }

  ngOnInit() {    
    this._heroesService.getHeroes().subscribe((data:any) => {
      this.heroes   =  data;      
      setTimeout(() => this.loading  =  false, 1500);      
    });      
  }

  public deleteHeroe(id:string,index:number):void {    
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if(resp.value) {
        this._heroesService.deleteHeroe(id).subscribe();
        this.heroes.splice(index,1);
        Swal.fire({
          type: 'success',
          title: 'Delete successfully!',
          text: 'The heroe was deleted successfully',
          allowOutsideClick: true
        });
      }        
    });  
  }
}
