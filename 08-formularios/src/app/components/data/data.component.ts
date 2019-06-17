import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
    correo:"",
    apodo:"",
    password1:"",
    password2:"",
    pasatiempos:[]
  };

  constructor() { 
    this.forma  = new FormGroup({
      "nombreCompleto": new FormGroup({
        "nombre": new FormControl("",[ 
                                       Validators.required,
                                       Validators.minLength(2)
                                     ]),
        "apellido": new FormControl("",[
                                        Validators.required,
                                        this.noVilla
                                      ])
      }),    
      "correo": new FormControl("",[
                                      Validators.required,
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                   ]),
      "apodo": new FormControl("",[Validators.required],this.existeUsuario),      
      "password1": new FormControl(""),
      "password2": new FormControl(""),
      "pasatiempos": new FormArray([])
    });  

    this.forma.controls['password1'].setValidators(Validators.required);
    this.forma.controls['password2'].setValidators([Validators.required,this.mismatchPassword.bind(this.forma)]);
    this.forma.controls['apodo'].valueChanges.subscribe(data => console.log(data));
    this.forma.controls['apodo'].statusChanges.subscribe(data => console.log(data));
  }

  private noVilla(control:FormControl):{[s:string]:boolean} {
    if(control.value === "Villa")
      return {novilla:true}
    else
      return null;
  }

  private mismatchPassword(control:FormControl):{[s:string]:boolean} {
    let forma:any  =  this;        
    if(control.value !== forma.controls['password1'].value) 
        return {mismatch:true}
    else
        return null;    
  }

  public addHobbie():void {
    (<FormArray>this.forma.controls['pasatiempos']).push(new FormControl("",Validators.required));
  }

  public existeUsuario(control:FormControl): Promise<any>|Observable<any> {
    let promesa = new Promise((resolve,reject) => {
      setTimeout(() => {
        if(control.value === "perviousnebula")
          resolve({existe:true});
        else
          resolve(null);
      }, 3000);
    });
    return promesa;
  }

  public removeHobbie(index:number):void {
    (<FormArray>this.forma.controls['pasatiempos']).removeAt(index);
  }

  public enviarForm() {
    if(this.forma.valid) {
      console.log("formulario:",this.forma.value);
      this.forma.reset(this.usuario);
      console.log("formulario reseteado:",this.forma.value);
      this.forma.setValue({
        nombreCompleto:{
          nombre:"",
          apellido:""
        },
        correo:"arturo.nevarez.villa@gmail.com",
        apodo:"",
        password1:"",
        password2:"",
        pasatiempos:[]
      });
      console.log("Formulario seteado:",this.forma.value);
    }
  }

}
