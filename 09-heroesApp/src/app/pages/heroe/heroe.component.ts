import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';

import Swal from 'sweetalert2'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    input.ng-invalid.ng-touched:not(form) {
      border: 1px red solid !important;
      animation: shake 0.3s;

      @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }
    }`
  ]
})
export class HeroeComponent implements OnInit {

  heroe:HeroeModel;
  formHeroe:FormGroup;
  loading:boolean;
  routeId:string;

  constructor(private _heroeService:HeroesService,
              private router:ActivatedRoute) { 
    this.routeId    =  this.router.snapshot.paramMap.get('id');
    this.loading    =  false;
    this.heroe      =  new HeroeModel();
    this.formHeroe  =  new FormGroup({
      "id": new FormControl({value:"",disabled:true}),
      "nombre": new FormControl("",[Validators.required,Validators.minLength(3)]),
      "poder": new FormControl(""),
      "vivo": new FormControl(true,[Validators.required])
    });
  }

  ngOnInit() {
    if(this.routeId  !== 'nuevo') {
      this._heroeService.getHeroe(this.routeId).subscribe((data:any) => {
        this.formHeroe.patchValue({id:this.routeId});
        this.formHeroe.patchValue(data);
      });      
    }
  }

  guardarHeroe():void {
    this.loading  =  true;
    Swal.fire({
      title: 'Espere',
      text: 'Guardando cambios...',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.isLoading();
    if(this.formHeroe.valid) {            
      if(this.formHeroe.controls.id.value) {             
        this._heroeService.updateHeroes(this.formHeroe.getRawValue()).subscribe((data:any) => {          
          this.loading  =  false;
          Swal.fire({
            title: "Éxito",
            text: "Los cambios fueron actualizados exitosamente",
            type: 'success'
          });
        });
      } else {                        
        this._heroeService.createHeroe(this.formHeroe.value).subscribe((data:any) => {                  
          this.formHeroe.patchValue({ id: data.id });                          
          this.loading  =  false;                
          Swal.fire({
            title: "Éxito",
            text: "Los cambios fueron actualizados exitosamente",
            type: 'success'
          });
        });
      }      
    }
  }
}
