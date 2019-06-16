import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles:[`
    .ng-invalid.ng-touched:not(form) {
      animation: shake 0.3s;
    }

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
  
  `]
})
export class DataComponent {

  forma:FormGroup;
  usuario:any = {
    nombreCompleto: {
      nombre:"",
      apellido:""
    },
    correo:""
  };

  constructor() { 
    this.forma  = new FormGroup({
      "nombreCompleto": new FormGroup({
        "nombre": new FormControl("",[ 
                                       Validators.required,
                                       Validators.minLength(2)
                                     ]),
        "apellido": new FormControl("",[
                                        Validators.required
                                      ])
      }),    
      "correo": new FormControl("",[
                                      Validators.required,
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                   ])
    });  
  }

  public enviarForm() {
    console.log("antes",this.forma.value);
    this.forma.reset(this.usuario);
    console.log("reset",this.forma.value);
    this.forma.setValue({
      nombreCompleto:{
        nombre:"",
        apellido:""
      },
      correo:"arturo.nevarez.villa@gmail.com"
    });
    console.log("setValue",this.forma);
  }

}
